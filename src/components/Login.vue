<template>
  <div class="login_box">
  <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="GitHub账户" prop="username">
    <el-input type="text" placeholder="请输入GitHub账号" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pwd">
    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
  
</template>

<script>
  export default {
    data() {
      
      return {
        ruleForm: {
          username: '',
          pwd: '',
        },
      };
    },
    methods: {
      submitForm(formName) {
         alert('登录')
      },
      resetForm(formName) {
        this.ruleForm = {}
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scope>
.login_box{
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#fff;
  padding: 40px;
}
</style>
