<template>
    <div>
        <Nav></Nav>
        <main class="main_box container">
            <section class="topic_box">
                <ul class="classify clearfix">
                    <li><a href="#">全部</a></li>
                    <li><a href="#">精华</a></li>
                    <li><a href="#">分享</a></li>
                </ul>
                <div class="content">
                    <ul>
                        <li v-for="(item,index) in topicData"  :key="index">
                            <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
                            <el-tag size="mini" type="success">{{item.visit_count}}</el-tag>
                            <a href="#" class="title"> {{item.title}}</a>
                            <span class="time">{{item.create_at}}</span>
                        </li>
                    </ul>
                </div>
                <el-pagination class="pagination"
                 background layout="prev, pager, next" :total="1000"></el-pagination>
            </section>
            <section class="left_box">
                <div class="login">
                    <h3>CNode：Node.js专业中文社区</h3>
                    <p>您可以 登录 或 注册 , 也可以</p>
                    <el-button type="primary">通过 Github 登录</el-button>
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
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
  components: { Nav },
    data() {
        return {
            topicData:[],
            pages:10,
            limit:11,
        }
    },
    methods: {
      async  getTopic(){
            const {data,status} = await this.$http.get(`/topics?limit=${this.limit}`);
            this.topicData = data.data;
            console.log(this.topicData)
        },
    },
    created() {
        this.getTopic();
    },
}
</script>

<style lang="" scope>
.main_box{
    margin-top: 15px;
    height: 600px;
    /* background-color: coral; */
     position: relative;
}
.main_box .topic_box{
    width: 1050px;
    height: 300px;
    float: left;
   
}
.topic_box .classify{
    border-bottom: 1px solid #ccc;
    background-color: royalblue;
}
.topic_box .classify li{
    float: left;
    padding: 10px;
    font-size: 14px;  
}

.topic_box .classify li:hover{
    background-color: cadetblue;
    /* border-radius: 20px; */
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