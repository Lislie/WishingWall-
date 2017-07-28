/**
 * Created by Ether on 2017/7/27.
 */
//1.获取令牌。在服务器端完成，代码如下：

class wxToken {
  wx_get_token() {
  $token = S('access_token')
  if (!$token) {
    $res = file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd934d895968c256e&secret=b0921f973ed0fc0dbb084af0e0a7eaa6')
    $res = json_decode($res, true)
    $token = $res['access_token']
    // 注意：这里需要将获取到的token缓存起来（或写到数据库中）
    // 不能频繁的访问https://api.weixin.qq.com/cgi-bin/token，每日有次数限制
    // 通过此接口返回的token的有效期目前为2小时。令牌失效后，JS-SDK也就不能用了。
    // 因此，这里将token值缓存1小时，比2小时小。缓存失效后，再从接口获取新的token，这样
    // 就可以避免token失效。
    // S()是ThinkPhp的缓存函数，如果使用的是不ThinkPhp框架，可以使用你的缓存函数，或使用数据库来保存。
    S('access_token', $token, 3600)
  }
  return $token
}
// 注意：返回的access_token长度至少要留够512字节。接口返回值：
// {"access_token":"ACCESS_TOKEN","expires_in":7200}
// {"access_token":"vdlThyTfyB0N5eMoi3n_aMFMKPuwkE0MgyGf_0h0fpzL8p_hsdUX8VGxz5oSXuq5dM69lxP9wBwN9Yzg-0kVHY33BykRC0YXZZZ-WdxEic4","expires_in":7200}


//2.获取jsapi的ticket。jsapi_ticket是公众号用于调用微信JS接口的临时票据。正常情况下，jsapi_ticket的有效期为7200秒，通过access_token来获取。
  wx_get_jsapi_ticket(){
  $ticket = ""
  do{
    $ticket = S('wx_ticket')
    if (!empty($ticket)) {
      break
    }
    $token = S('access_token')
    if (empty($token)){
      wx_get_token()
    }
    $token = S('access_token')
    if (empty($token)) {
      logErr("get access token error.")
      break
    }
    $url2 = sprintf("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=%s&type=jsapi",
      $token)
    $res = file_get_contents($url2)
    $res = json_decode($res, true)
    $ticket = $res['ticket']
    // 注意：这里需要将获取到的ticket缓存起来（或写到数据库中）
    // ticket和token一样，不能频繁的访问接口来获取，在每次获取后，我们把它保存起来。
    S('wx_ticket', $ticket, 3600)
  }while(0)
  return $ticket
}
// 接口返回值：
// {"errcode":0,"errmsg":"ok","ticket":"sM4AOVdWfPE4DxkXGEs8VMKv7FMCPm-I98-klC6SO3Q3AwzxqljYWtzTCxIH9hDOXZCo9cgfHI6kwbe_YWtOQg","expires_in":7200}



//3.签名，将jsapi_ticket、noncestr、timestamp、分享的url按字母顺序连接起来，进行sha1签名。
// noncestr是你设置的任意字符串。
// timestamp为时间戳。

  timeCuo() {
    $timestamp = time()
    $wxnonceStr = "Ether"
    $wxticket = wx_get_jsapi_ticket()
    $wxOri = sprintf("jsapi_ticket=%s&noncestr=%s&timestamp=%s&url=%s",
      $wxticket, $wxnonceStr, $timestamp,
      'http://www.etherchen.com/'
    )
    $wxSha1 = sha1($wxOri)
    return $wxSha1
  }

}
export default new wxToken()



