<template>
    <div id="login">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Login</span>
        </div>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="UserName" prop="usename">
                <el-input v-model="form.usename"></el-input>
            </el-form-item>
            <el-form-item label="PrassWord" prop="prassword">
                <el-input type="password" v-model="form.prassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        usename: '',
        prassword: ''
      },
      rules: {
        usename: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 4, max: 9, message: '请输入正确的账号4位数到9位数的账号', trigger: ['blur', 'change']}
        ],
        prassword: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 4, max: 9, message: '请输入正确的账号4位数到9位数的密码', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
#login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../assets/images/GIF.gif) no-repeat;
    background-size: 100% 100%;
}
#login .box-card {
    width: 520px;
    margin: 280px auto;
    background-color: rgba(54, 49, 49, 0.8);
    color: rgb(38, 247, 107);
}
#login .box-card .el-button {
    width: 100%;
    background-color: #000000;
    color: rgb(38, 247, 107);
}
</style>
