<template>
 <div class="panel">
 <div class="header">
      
        <a   v-link="{name: 'home',params:{tab: 'all'}}" @click='getdata("all")' class="topic-tab " 
        :class="{'current-tab':this.$route.path == '/Home/all' }">全部</a>
      
        <a  v-link="{name: 'home',params:{tab: 'good'}}" @click='getdata("good")' class="topic-tab "
        :class="{'current-tab':this.$route.path == '/Home/good' }"
        >精华</a>
      
        <a  v-link="{name: 'home',params:{tab: 'share'}}" @click='getdata("share")' class="topic-tab "
        :class="{'current-tab':this.$route.path == '/Home/share' }"
        >分享</a>
      
        <a   v-link="{name: 'home',params:{tab: 'ask'}}" @click='getdata("ask")' class="topic-tab "
        :class="{'current-tab':this.$route.path == '/Home/ask' }"
        >问答</a>
      
        <a   v-link="{name: 'home',params:{tab: 'job'}}" @click='getdata("job")' class="topic-tab "
        :class="{'current-tab':this.$route.path == '/Home/job' }"
        >招聘</a> 
      
    </div>
    <div class="inner no-padding">
    		<ul class='content'>
    		<li v-for="it in item">
    		  
              <img class="imgs"  :src=" it.author.avatar_url " title="{{ it.author.loginname }}" v-bind="{ id: $index }">
              <span class='liu'>{{ it.reply_count }}/{{ it.visit_count }}</span>
              <span v-bind:class="{'put_top': it.top}" class="topiclist-tab" v-show="it.tab == 'share' ">分享</span>
              <span class="put_top" v-show="it.tab == 'good' ">精华</span>
              <span class="topiclist-tab" v-show="it.tab == 'ask' ">问答</span>
              <span class="topiclist-tab" v-show="it.tab == 'job' ">招聘</span>
              <a v-link="{ name: 'dda', params: { id: it.id }}"><span class="title">{{ it.title }}</span></a>
              
    		</li>
    		</ul>
    </div>
   <router-view ></router-view>
 </div>
</template>

<script>
export default {
   data: function () {
        return {
            item: [],
            tab: 'all'
        }
   },
   ready: function () {
        this.getdata(this.tab)
   },
   methods: {
    getdata: function (tab) {
            console.log(this.tab)
            this.$http.get('https://cnodejs.org/api/v1/topics',{params:{tab: tab}}).then(
                function (res) {
                    if(res.status == 200 && res.data.data.length != 0 )
                    {
                        this.$set('item' , res.data.data)
                    }
                }
            )
        }
   },
   wacth: {

   },
   computed: {

   }
}
</script>


<style>

.panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    border: none;
}
.topic-tab.current-tab {
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
}
.topic-tab {
    margin: 0 10px;
    color: #80bd01;
}
ul{
	list-style: none;
}
.content li {
	height: 50px;
	//border:1px solid red;
}
.content img {
	margin-top: 10px;
	margin-left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
}
.liu {
	margin-top: 25px;
	font-size: 12px;
    color: #b4b4b4;
}
.put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
}
.topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
}
</style>
