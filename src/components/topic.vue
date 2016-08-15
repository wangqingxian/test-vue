<template>
<div class="detail">
  <div class="d-title">
    <h4>{{ item.title }}</h4>
    <span> 发布于 {{ item.create_at }}  作者 {{ item.author.loginname }}  {{ item.visit_count }} 次浏览  来自 分享</span>
  </div>
  <!-- 内容区 -->
  <div v-html="item.content"></div>
  <!-- 回复区域 -->
</div>
 <div class="replies">
  <div class="replies-count">{{ item.replies.length}}回复</div>

  <div class="replies--detail" v-for="rep in item.replies">
    <div class="replies--detail-img-title">
    <img :src="rep.author.avatar_url" >
    {{ rep.author.loginname }}    
    <a>{{$index+1}}楼 {{ rep.create_at }}</a> {{ rep.ups.length}}个赞<br>
    <span class="replies" v-html="rep.content" ></span>
    </div>
  </div>

  </div>

 <router-view ></router-view>
</template>

<script>
export default {
  data: function () {
      return {
        item: []
      }
  },
	ready: function () {
		var url = "https://cnodejs.org/api/v1/"+this.$route.path
   		this.$http.get(url, []).then(
   			function (res) {
   				if(res.status == 200 && res.data.success == true)
   				{
   					console.log(res.data.data)
            this.$set('item', res.data.data)
   				}
   			}
   		)
  }
}
</script>

<style>
.detail ,.replies{
  width: 75%;
  background-color: #F8F8F8;
  margin-left: 20px;
  margin-bottom: 20px;
}
.d-title{
  border-bottom: 1px solid #e1e1e1;
}
.replies-count{
  height: 27px;
  background-color: #CCC;
}
.replies--detail-img-title{

}
.replies--detail-img-title img{
   width: 30px;
   height: 30px;
   border-radius: 100%;
}

body {
    background-color: #e1e1e1;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
</style>