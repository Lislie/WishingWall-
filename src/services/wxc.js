/**
 * Created by Ether on 2017/7/27.
 */
<script>
//自定义分享参数
var wxData = {
  "imgUrl": "",//图片
  "link": "",//分享链接
  "title": "",//定义分享标题
  "desc":""
}
<script src="/js/WeixinApi.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

然后在TP里的view新建一个layout(我以最基本要的HTML为例)
Layout/jsapi.phtml：
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <title></title>
  </head>
  <body>
  {__CONTENT__}
  </body>
  <script type="text/javascript">
  window.jQuery || document.write("<script src='__PUBLIC__/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <script>
  wx.config({
    debug: false,
    appId: '{$signPackage["appId"]}',
    timestamp: {$signPackage["timestamp"]},
    nonceStr: '{$signPackage["nonceStr"]}',
    signature: '{$signPackage["signature"]}',
    jsApiList: [
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage'
    ]
  });
wx.ready(function () {
  wx.checkJsApi({
    jsApiList: [
      'getNetworkType',
      'previewImage'
    ],
    success: function (res) {
      //alert(JSON.stringify(res));
    }
  });

  var shareObj = {
    title: '{$shapeObje.title}',
    desc: '{$shapeObje.desc}',
    link: '{$shapeObje.link}',
    imgUrl: '{$shapeObje.imgUrl}',
    trigger: function (res) {
      alert('用户点击发送给朋友');
    },
    success: function (res) {
      alert('已分享');
    },
    cancel: function (res) {
      alert('已取消');
    },
    fail: function (res) {
      alert(JSON.stringify(res));
    }
  };
  //分享朋友
  wx.onMenuShareAppMessage(shareObj);
  //分享朋友圈
  wx.onMenuShareTimeline(shareObj);
});
jQuery.getJSON('index/ticket', function(data) {
  alert(data);
  if(data) {
    alert('ticket update');
  }
});

wx.error(function(res){
  var str = res.errMsg;
  var reg = /invalid signature$/;
  var r = str.match(reg);
  //当提示签名有误时就AJAX方式更新ticket后再刷新当前页
  if(r !== null) {
    jQuery(function(){
      $.getJSON('http://www.demo.com/home/index/ticket', function(data) {
        if(data) {
          alert('ticket update');
          location = location;
          window.navigate(location);
        }
      });
    });
  }
});
</script>
</html>

TP中的控制器，初化设置相关数据替换模板和远程更新ticket方法
<?php
  namespace Home\Controller;
use Think\Controller;
use Wx\WechatJSAPI;

class IndexController extends Controller {
  protected $api;
  public function _initialize() {
  $package = $this->getJsPackage();
  $this->assign('signPackage',$package);
  $this->assign('shapeObje',array(
    'title' => '测试标题',
    'desc' => '测试描述',
    'link' => "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]",
    'imgUrl' => "yun_qi_img/No-Event.php",
));
}

  public function indexAction(){
  $this->display();
}

  protected function getJsPackage() {
  $config = C('WECHAT_CONF');
  $this->api = WechatJSAPI::getInstance(array(
    WechatJSAPI::APP_ID => $config[WechatJSAPI::APP_ID],
    WechatJSAPI::APP_SECRET => $config[WechatJSAPI::APP_SECRET]
));
  return $this->api->getSignPackage();
}

  public function ticketAction() {
  if(IS_AJAX) {
    $res = $this->api->refreshTicket();
    $this->ajaxReturn($res);
  }
}
}
