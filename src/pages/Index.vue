<template>
    <div>
        <!-- 导航栏 -->
        <Nav></Nav>
        <!-- 主体区域 -->
        <main class="main_box container clearfix">
            <section class="topic_box clearfix">
                <ul class="classify clearfix">
                    <li><a href="#" @click="change(1)" :class="{active : index ==1}">全部</a></li>
                     <li><a href="#" @click="change(2)" :class="{active : index ==2}">精华</a></li>
                     <li><a href="#" @click="change(3)" :class="{active : index ==3}">分享</a></li>
                    <li><a href="#" @click="change(4)" :class="{active : index ==4}">问答</a></li>
                    <li><a href="#" @click="change(5)" :class="{active : index ==5}">招聘</a></li>
                </ul>
                <div class="content clearfix">
                    <ul>
                        <li v-for="(item,index) in topicData"  :key="index">
                            <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
                            <el-tag size="mini" type="success">{{item.visit_count}}</el-tag>
                            <router-link :to="{path:'detail',query:{id:item.id,userId:item.author.loginname}}" class="title"> {{item.title}}</router-link>
                            <el-tag size="mini" type="success">{{item.tab == "share" ? "分享": item.tab =="ask"?"问答": item.good=="true"? "精华":"招聘"}}</el-tag>
                            <span class="time">{{item.create_at}}</span>
                        </li>
                    </ul>
                </div>
                <!-- 分页 -->
                <el-pagination
                style="margin:10px"
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :current-page="currentPage"
                 :page-sizes="[10, 20, 30, 40]"
                 
                 layout="total, sizes, prev, pager, next, jumper"
                 :total="total">
                 </el-pagination>
            </section>
            <section class="left_box ">
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
            //热门话题
            hotTopics:[],
            //主体数据
            topicData:[],
            //总量
            total:40,
            //当前页
            currentPage:1,
            // 每页显示多少条
            limit:10,
            //标签
            tab :'',
            mdrender :'true',
            //导航切换
            index:1,
            
        }
    },
    methods: {
        handleSizeChange(val) {
        // 每页显示多少条
        console.log(`每页 ${val} 条`);
        this.limit = val;
        console.log(this.index)
        switch(this.index){
            case 1:this.getAllTopics(this.currentPage,this.limit);break;
            case 2:this.gettopicByTab(this.currentPage,this.limit,'good');break;
            case 3:this.gettopicByTab(this.currentPage,this.limit,'share');break;
            case 4:this.gettopicByTab(this.currentPage,this.limit,'ask');break;
            case 5:this.gettopicByTab(this.currentPage,this.limit,'job');break;
        }
        
        
      },
      //当前页
      handleCurrentChange(val) {
        // console.log(this.index)
        console.log(`当前页: ${val}`);
        switch(this.index){
            case 1:this.getAllTopics(val,this.limit);break;
            case 2:this.gettopicByTab(val,this.limit,'good');break;
            case 3:this.gettopicByTab(val,this.limit,'share');break;
            case 4:this.gettopicByTab(val,this.limit,'ask');break;
            case 5:this.gettopicByTab(val,this.limit,'job');break;
        }       
      },
        //登录
        goLogin(){
            this.$router.push('/login')
        },
        //导航切换
        change(index){
            switch(index){
                case 1:this.index = index;this.getAllTopics(this.currentPage,this.limit); 
                break;
                case 2:this.index = index;this.gettopicByTab(this.currentPage,this.limit,'good');
                break;
                case 3:this.index = index;this.gettopicByTab(this.currentPage,this.limit,'share');
                break;
                case 4:this.index = index;this.gettopicByTab(this.currentPage,this.limit,'ask')
                break;
                case 5:this.index = index;this.gettopicByTab(this.currentPage,this.limit,'job')
                break;
            }
           
        },
        //通过tab来请求相应数据
        async gettopicByTab(page,limit,tab){
           const {data,status} = await this.$http.get(`/topics?page=${page}&limit=${limit}&tab=${tab}`);
           this.topicData = data.data; 
           console.log(data.data);
        },
        
        //根据条件获取所有topic
        async getAllTopics(page,limit){
            const {data,status} = await this.$http.get(`/topics?page=${page}&limit=${limit}`);
            this.topicData = data.data;
            
        },
        // 获取数据总长度
        async getTopicsLength(){
            const {data,status} = await this.$http.get(`/topics`);
            this.total = data.data.length;
            // this.hotTopics = data.data.
        }
    },
    beforeMount() {
        this.getAllTopics(this.currentPage,this.limit); 
        this.getTopicsLength();     
    },
}
</script>

<style lang="" scope>
.main_box{
    margin-top: 15px;
    position: relative;
}
.main_box .topic_box{
    width: 1050px;
    float: left;
   
}
.topic_box .classify{
    height: 40px;
    border-bottom: 1px solid #ccc;
    background-color:  rgb(5, 162, 173);
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
.topic_box .content li .img{
    float: left;
    margin: 2px 5px 0 0;
}
.topic_box .content li .title{
    color: #888;
}
.topic_box .content li .title:hover{
    text-decoration:underline;
}
.topic_box .content li .time{
    float:right;
    font-size: 12px;
}
.pagination{
    margin: 20px;
}
.main_box .left_box{
    width: 235px;
    float: right;
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
    background: url(../assets/01.png) no-repeat ;
    background-size: 100%  auto;
}
.friends_communiction h4{
    color: black;
    text-align: center;
}

</style>