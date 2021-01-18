<template>
    <div class="nav ">
        <header class="container clearfix">
            <h2 class="logo"><a href="#">Cnode</a></h2>
            <label for="" >
                <i class="el-icon-search"></i>
                <input class="search" type="text" placeholder="搜你想要的">
            </label>
            <ul class="nav_list">
                <li><a href="#">首页</a></li>
                <li><a href="#" @click="open">新手入门</a></li>
                <li><a href="#" @click="open">API</a></li>
                <li><a href="#" @click="open">关于</a></li>
                <li><a href="#" @click="gotoLogin">登录</a></li>
                <!-- <li><a href="#">退出</a></li> -->
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        // 跳转登录
        gotoLogin(){
             this.$router.push('/login')
        },
        open() {
        this.$message({
            message: '此功能未开通',
            type: 'warning',
            duration:1000
        });
      },
    },
}
</script>

<style  scope>
.nav{
    height: 50px;
    width: 100%;
    min-width: 750px;
    background-color: #444;
}
.nav .logo{
    line-height: 50px;
    float: left;
    /* margin-left: 50px; */
}
.nav .search{
    float: left;
    height: 30px;
    width: 200px;
    margin:10px 0 0 30px;
    border-radius: 15px;
    padding-left: 25px;
    font-size: 12px;
}
.el-icon-search{
    position: relative;
    top: 15px;
    left: -195px;
}
 .nav .nav_list{
    float:right;
    /* margin-right: 100px; */
}
.nav .nav_list li{
    float: left;   
}
 .nav .nav_list li a{
    line-height: 50px;
    font-size: 13px;
    text-align: center; 
    padding: 3px 10px;
    border-radius: 20px;
}
.nav .nav_list li a:hover{
    background: rosybrown;

}
</style>