<template>
    <div class="nav ">
        <header class="container clearfix">
            <h2 class="logo"><a href="#">Cnode</a></h2>
            <label for="" >
                <i class="el-icon-search"></i>
                <input class="search" type="text" placeholder="搜你想要的">
            </label>
            <ul class="nav_list">
                <li @click="gotoIndex(),changeNav(1)"><router-link to="" :class="{active:index==1}" >首页</router-link></li>
                <li @click="open(),changeNav(2)"><router-link to="" :class="{active:index==2}" >新手入门</router-link></li>
                <li @click="open(),changeNav(3)"><router-link to="" :class="{active:index==3}" >API</router-link></li>
                <li @click="open(),changeNav(4)"><router-link to="" :class="{active:index==4}" >关于</router-link></li>
                <li @click="open()"><router-link to="" >登录</router-link></li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
        index:1
        }
    },
    methods: {
        // 跳转登录
        gotoLogin(){
            this.$router.push('/login')
        },
        //跳转首页
        gotoIndex(){
            this.$router.push('/')
        },
        open() {
        this.$message({
            message: '此功能未开通',
            type: 'warning',
            duration:1000
        });
      },
      changeNav(index){
        switch(index){
            case 1:this.index = index;break;
            case 2:this.index = index;break;
            case 3:this.index = index;break;
            case 4:this.index = index;break;
            
        }
      }
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
    
}
.nav .logo a{
    color: #ccc;
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
    border-radius: 10px;
    color: #ccc;
}
.nav .nav_list li a:hover{
    background: #fff;
    color: black;

}
</style>