<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import moment from 'moment'



  Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'MM月DD日 HH:mm'
    return moment(value).format(formatString)
  })
  export default {
    data () {
      return {
        wish: [],
        value1: 0

      }
    }
  }
   	//滑屏的初始值
      	Vue.prototype.touchStartTop = 0
      	Vue.prototype.touchEndTop = 0
      	//控制滑屏的范围的启动值 单位PX
      	Vue.prototype.startTouch = 100
        //获得page1对象

  //全局页面监听滑动，任何页面都能调用 , 传event：对象名  , isId 判断是Id还是class 1是Id， 0 为class 因为是页面的对象 所以是唯一的  selector性能较差 所以用单通道
	Vue.prototype.touchStart= function(event,isId){
		let _document = null
		if(isId){
			_document = document.getElementById(event)
		}else{
			_document = document.getElementsByClassName(event)[0]
		}
			//下一页对象
      let downBtn = document.getElementsByClassName("downBtn")[0]
      //上一页对象
      let upBtn = document.getElementsByClassName("upBtn")[0]
			let _this = this
			//监听触摸开始事件
			_document.addEventListener("touchstart",function(event){

          		 // 如果这个元素的位置内只有一个手指的话
    				if (event.targetTouches.length == 1) {
　　　　 				event.preventDefault();// 阻止浏览器默认事件，重要
       	 			var touch = event.targetTouches[0];
       	 			_this.touchStartTop = touch.pageY;
       			}
          })
			//监听触摸过程事件
			  _document.addEventListener("touchmove",function(event){
          		 // 如果这个元素的位置内只有一个手指的话
    				if (event.targetTouches.length == 1) {
　　　　 				event.preventDefault();// 阻止浏览器默认事件，重要
       	 			var touch = event.targetTouches[0];
       	 			_this.touchEndTop = touch.pageY;
       	 			//当上下滑的值达到设定的值就开始滑动页面
       	 			if(_this.touchStartTop-_this.touchEndTop>=_this.startTouch){
       	 				//下一页
       	 				downBtn.click()
       	 			}
       	 			if((_this.touchStartTop-_this.touchEndTop<0)&&(Math.abs(_this.touchStartTop-_this.touchEndTop)>=_this.startTouch)){
       	 				//上一页
       	 				upBtn.click()
       	 			}
       			}
          })

	}

</script>
<style>
  html,body{
    height: 100%
  }
</style>
<style lang="stylus" scoped>
  @import './assets/styl/rem.styl'
    #app
      font-family 'MFYueYuan_Noncommercial-Regular', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
      width 100%
      height 100%
</style>
