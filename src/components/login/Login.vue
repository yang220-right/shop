<template>
  <div class="Login">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img src="~assets/logo.png" alt="" />
      </div>
      <!-- 头像区域 -->
      <el-form
        :model="loginForm"
        :rules="loginFromRules"
        label-width="0"
        class="login_form"
        ref="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm('login_form')" type="info"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Login } from "network/login";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      loginFromRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符之间",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$refs.login_form.validate((v) => {
        if (!v) return;
        else {
          this.Login().then((res) => {
            if (res.meta.status !== 200)
              return this.$message.error("密码或用户名错误~");
            this.$message.success("登录成功,祝您购物愉快");
            window.sessionStorage.setItem("token", res.data.token); //保存到session
            this.$router.replace("/home");
          });
        }
      });
    },
    Login() {
      return Login(this.loginForm.username, this.loginForm.password);
    },
  },
};
</script>
<style lang="less" scoped>
// @import '',
.Login {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 30px;
  .avator_box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 130px;
    width: 130px;
    border: 1px solid solid;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    background: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>