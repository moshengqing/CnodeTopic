<template>
    <div >
        <Nav></Nav>
        <div class="container detail clearfix">
         <div class="left_content" >
             <div class="title_box">
             <h3>{{oneTopic.title}}</h3>
             <p> 发布于{{oneTopic.create_at}}---作者:{{oneTopic.author.loginname}} -- {{oneTopic.visit_count}}次浏览 来自 {{oneTopic.tab == "share" ? "分享": oneTopic.tab =="ask"?"问答": oneTopic.tab=="good"? "精华":"招聘"}}</p>
             <el-button class="selected" type="success">收藏</el-button>
             </div>
             <!-- 主题内容 -->
             <div class="topic_content" v-html="oneTopic.content"></div>
         </div>
         <div class="right_content">
             <h4 >作者</h4>
             <div class="authoer_info">
               <img :src="topicAuthor.avatar_url" alt="头像暂无">
               <span class="author_name">{{topicAuthor.githubUsername}}</span>
             </div>
             <p class="score">积分:{{topicAuthor.score}}</p>
             <p class="individual_signature">“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
         </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Foot from '@/components/Foot.vue'
export default {
    components:{Nav,Foot},
    data() {
        return {
            //首页传参的参数
            topicId:this.$route.query.id,
            userId:this.$route.query.userId,
            //该条数据
            oneTopic:{},
            //该条主题作者
            topicAuthor:{},
            loginName:''
        }
    },
    methods: {
        //获取该条主题详情
      async  getOneTopic(){
            const {data,status} = await this.$http.get(`/topic/${this.topicId}`);
            if(status == 200){
                this.oneTopic = data.data;
            }
            // console.log(this.oneTopic.author)
            // console.log(this.oneTopic.author.loginname)
            // this.loginName = this.oneTopic.author.loginname;
            // console.log(this.loginName);
            
        },
        //获取该条主题的作者
       async getTopicAuthor(){
           const {data,status} = await this.$http.get(`/user/${this.userId}`);
           if(status ==200){
               this.topicAuthor = data.data
           }
           console.log(this.topicAuthor);
        }
    },
    mounted() {
        this.getOneTopic(),
        this.getTopicAuthor()
        console.log(this.userId)
    },

}
</script>

<style scope>
.detail{
    margin: 10px auto;
}
.left_content{
    float: left;
    width: 1050px;
    padding: 10px;  
     overflow: hidden;
}
.left_content .title_box{
    padding: 10px;
    position: relative;
    background-color: #fff;
}
.title_box h3{
    padding: 5px;
 }
.title_box p{
    font-size: 12px;
  }

.title_box .selected{
    position: absolute;
    right: 20px;
    bottom: 10px;
}
.left_content .topic_content{
    margin-top: 1px;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
.left_content img{
    width: 100%;
    max-height: 500px;
}
.right_content{
    float: right;
    width: 225px;
    padding: 10px 5px;
    background-color: #fff;
    
}
.right_content h4{
    padding: 10px;
    background-color: #ccc;
    text-align: center;
}
.right_content .authoer_info img{
    border: 1px solid #ddd;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    vertical-align: middle;
}
.right_content .authoer_info{
    width: 100%;
    height: 50px;
}
.right_content .author_name{
    font-weight: 600;
    line-height: 50px;
    padding-left: 10px;

}
.right_content .score{
    font-weight: 600;
    padding: 10px;
}
.right_content .individual_signature{
    font-size: 14px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
</style>