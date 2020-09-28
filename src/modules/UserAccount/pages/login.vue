<template>
  <div class="user-account-login-container">
    <div class="submit-form-box">
      <div class="form-title">
        <img
          class="form-title-icon"
          src="@/assets/images/vue.svg"
        >
        <p>
          Element Admin
        </p>
      </div>
      <el-form
        ref="loginForm"
        :model="form"
        @keyup.enter.native="onSubmit()"
      >
        <el-form-item
          prop="username"
          :rules="getRequiredRules({
            trigger: 'change',
            message: '请填写用户名'
          })"
        >
          <el-input
            v-model="form.username"
            suffix-icon="user-tie"
            placeholder="用户名: admin or user"
          >
            <font-awesome-icon
              slot="prefix"
              class="input-icon-prefix"
              icon="user-tie"
            />
          </el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="getRequiredRules({
            trigger: 'change',
            message: '请填写密码'
          })"
        >
          <el-input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            suffix-icon="lock"
            placeholder="密码: 同用户名"
          >
            <font-awesome-icon
              slot="prefix"
              class="input-icon-prefix"
              icon="lock"
            />
            <font-awesome-icon
              slot="suffix"
              class="input-icon-lock"
              :icon="showPassword ? 'eye' : 'eye-slash'"
              @click="tooglePassword()"
            />
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="form-feedback">
            <el-checkbox
              v-model="feedback.autoLogin"
              true-label="1"
              false-label="0"
              @change="handleAutoLogin"
            >
              自动登录
            </el-checkbox>
            <el-link
              type="primary"
              :underline="false"
            >
              忘记密码
            </el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="form-submit"
            @click="onSubmit()"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import { setAutoLogin, getAutoLogin } from '@/modules/UserAccount/utils/auth'

export default {
  name: 'UserAccountLogin',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      feedback: {
        autoLogin: getAutoLogin()
      },
      showPassword: false
    }
  },
  methods: {
    handleAutoLogin (val) {
      setAutoLogin(val)
    },
    onSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
        } else {
          return false
        }
      })
    },
    tooglePassword () {
      this.showPassword = !this.showPassword
    }
  }
}

</script>

<style lang="scss" scoped>
.user-account-login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f0f2f5;
  background-repeat: no-repeat;
  background-position: center 80px;
  background-size: 100%;
  .submit-form-box {
    width: 365px;
    margin: 130px auto 0;
    user-select: none;
    /deep/ .el-input .el-input__inner {
      letter-spacing: 1px;
    }
    .input-icon-prefix {
      padding-left: 6px;
    }
    .input-icon-lock {
      cursor: pointer;
    }
    .form-title {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      font-size: 33px;
      font-weight: 600;
      text-align: center;
      padding-bottom: 35px;
      .form-title-icon {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
    .form-feedback {
      display: flex;
      justify-content: space-between;
    }
    .form-submit {
      width: 100%;
    }
  }
}

@media screen and (max-width: 576px) {
  .user-account-login-container {
    .submit-form-box {
      width: 95%;
    }
  }
}
</style>
