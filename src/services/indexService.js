import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class IndexService {

  sendcode (phone) {
    return xhr({
      url: 'sendNum',
      method:'post',
      body:{
        mobile:phone
      }
    })
  }

  checkNum(data){
    return xhr({
        url: 'checkNum',
        method:'post',
        body:{
          mobile:data.mobile,
          chkNum:data.chkNum
        }
    })
  }

  sendWish(data){
    return xhr({
        url: 'wish/save',
        method:'post',
        body:{
          mobile:data.mobile,
          channel:data.channel,
          userId:data.userId,
          headUrl:data.headUrl,
          nickName:data.nickName,
          wish:data.wish,
          activityId:'fc3825e6-b05c-486e-8ac0-a1212949d001'
        }
    })
  }

  get_one_wish(id){
    return xhr({
        url: 'wish/'+id
    })
  }
  praise(data){
    return xhr({
        url:'praise',
        method:'post',
        body:{
          id:data.id,
          userId:'ev2gagbvibnkamhjoxdnjf',
          channel:data.channel,
          headUrl:data.headUrl,
          nickName:data.nickName,
          activityId:'fc3825e6-b05c-486e-8ac0-a1212949d001'
        }
    })
  }
  getuserinfo(code){
    return xhr({
      url:'weichatUserInfo',
      method:'post',
      body:{
        code:code
      }
    })
  }

  signature(url){
    return xhr({
      url:'signature',
      method:'post',
      body:{
        url:url
      }
    })
  }

  wishwall(page,activityId,userId,channel){
    return xhr({
      url:'wish?pageNum='+page+'&activityId='+activityId+'&userId='+userId+'&channel='+channel
    })
  }
}
// 实例化后再导出
export default new IndexService()
