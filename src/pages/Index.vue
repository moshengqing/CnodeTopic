<template>
    <div>
        <!-- 导航栏 -->
        <Nav></Nav>
        <!-- 主体区域 -->
        <main class="main_box container">
            <section class="topic_box">
                <ul class="classify clearfix">
                    <li><a href="#" @click="change(1)" :class="{active : index ==1}">全部</a></li>
                    <li><a href="#" @click="change(2)" :class="{active : index ==2}">精华</a></li>
                    <li><a href="#" @click="change(3)" :class="{active : index ==3}">分享</a></li>
                    <li><a href="#" @click="change(4)" :class="{active : index ==4}">问答</a></li>
                    <li><a href="#" @click="change(5)" :class="{active : index ==5}">招聘</a></li>
                </ul>
                <div class="content">
                    <ul>
                        <li v-for="(item,index) in topicData"  :key="index">
                            <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
                            <el-tag size="mini" type="success">{{item.visit_count}}</el-tag>
                            <router-link :to="{path:'detail',query:{id:item.id,userId:item.author.loginname}}" class="title"> {{item.title}}</router-link>
                            <el-tag size="mini" type="success">{{item.tab == "share" ? "分享": item.tab =="ask"?"问答": item.tab=="good"? "精华":"招聘"}}</el-tag>
                            <span class="time">{{item.create_at}}</span>
                        </li>
                    </ul>
                </div>
                <!-- 分页 -->
                <el-pagination class="pagination"
                 background layout="prev, pager, next" :total="100"></el-pagination>
            </section>
            <section class="left_box clearfix">
                <div class="login">
                    <h3>CNode：Node.js专业中文社区</h3>
                    <p>您可以 登录 或 注册 , 也可以</p>
                    <el-button @click="goLogin" type="primary">通过 Github 登录</el-button>
                </div>

                <div class="hot_topic">
                    <h4>热门话题</h4>
                    <ul>
                        <li>1</li>
                        <li>3</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>

                <a href="https://ruby-china.org/" class="friends_communiction">
                    <h4>友情社区</h4>
                    <!-- <img src="../assets/01.png" alt="" srcset=""> -->
                </a>
            </section>
        </main>
        <!-- 底部 -->
        <Foot></Foot>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Foot from '@/components/Foot.vue'
export default {
  components: { Nav,Foot },
    data() {
        return {
            topicData:[],
            pages:10,
            limit:11,
            index:1,
            tab :'',
            mdrender :'true'
        }
    },
    methods: {
        //登录
        goLogin(){
            this.$router.push('/login')
        },
        //导航切换
        change(index){
            switch(index){
                case 1:this.index = index;break;
                case 2:this.index = index;break;
                case 3:this.index = index;break;
                case 4:this.index = index;break;
                case 5:this.index = index;break;
            }
        },
        //获取所有topic
        async getAllTopics(){
            const {data,status} = await this.$http.get(`/topics?limit=${this.limit}`);
            this.topicData = data.data;
            console.log(this.topicData);
        },
    },
    mounted() {
        this.getAllTopics();
    },
}
</script>

<style lang="" scope>
.main_box{
    margin-top: 15px;
    height: 600px;
     position: relative;
}
.main_box .topic_box{
    width: 1050px;
    height: 300px;
    float: left;
   
}
.topic_box .classify{
    height: 40px;
    border-bottom: 1px solid #ccc;
    background-color:  rgb(68, 68, 68);
}
.topic_box .classify li{
    float: left;
    font-size: 14px; 
}
.topic_box .classify li a{
    line-height: 40px;
    padding: 0 10px;
}
.topic_box .classify li a:hover{
    background-color: #FFF;
    color: black;
    border-radius: 10px;
}
.topic_box .content li{
    width: 100%;
    height: 44px;
    padding: 0 10px 0 5px;
    background-color:#fff;
    margin-top: 2px;  
    line-height: 44px;
    cursor: pointer;
}
/* .topic_box .content li:hover{
    background-color: rgba(175, 169, 169, 0.5);
} */
.topic_box .content li .img{
    float: left;
    margin: 2px 5px 0 0;
}

.topic_box .content li .title{
    color: #888;
    /* padding-left: 20px; */
}
.topic_box .content li .title:hover{
    text-decoration:underline;
}
.topic_box .content li .time{
    float:right;
    font-size: 12px;
}
.pagination{
    position: absolute;
    bottom: 10px;
    left: 0;
}

.main_box .left_box{
    width: 235px;
    height: 300px;
    float: right;
    /* background-color: #fff; */
}
.login{
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px;
    font-size: 14px;
    color: black;
    line-height: 2em;
}
.hot_topic{
    width: 100%;
    height: 250px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #fff;
}
.hot_topic h4{
    text-align: center;
    padding: 10px;
    background-color: rgba(241, 241, 241, 0.8);
}
.friends_communiction{
    display: block;
    margin-top: 10px;
    height: 100px;
    width: 100%;
    background-color: #fff;
    background: url(../assets/01.png) no-repeat ;
    background-size: 100%  auto;
}
.friends_communiction h4{
    color: black;
    text-align: center;
}

</style>