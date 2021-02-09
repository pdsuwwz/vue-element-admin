<template>
  <div class="user-account-login">
    <div class="user-account-nav">
      <div class="nav-logo"></div>
      <div class="nav-circle"></div>
      <div class="nav-title">
        Element Admin
      </div>
    </div>
    <UserAccountContainerLayout
      v-bind="configLogin"
      :form-data="formData"
      @on-submit="onSubmit"
    >
      <!-- <img
        slot="titleIcon"
        src="~@/assets/images/vue.svg"
        alt=""
      > -->
      <i
        slot="titleIcon"
        class="el-icon-s-opportunity"
      ></i>
    </UserAccountContainerLayout>
  </div>
</template>

<script>

import UserAccountContainerLayout from '@/modules/UserAccount/components/ContainerLayout'

import UserAccountModule from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'

export default {
  name: 'UserAccountLogin',
  components: {
    UserAccountContainerLayout
  },
  data () {
    return {
      isLoading: true,
      inputErrorEmail: '',
      inputErrorPassword: '',
      formData: {
        email: 'admin@org.com',
        password: '123456'
      }
    }
  },
  computed: {
    configLogin () {
      return {
        title: '欢迎登录',
        actionList: [
          {
            attrs: {
              type: 'primary',
              loading: this.isLoading,
              size: 'large'
            },
            text: '登录',
            on: {
              click (refForm) {
                this.onSubmit(refForm)
              }
            }
          }
        ],
        formConfig: [
          {
            attrs: {
              prop: 'email',
              error: this.inputErrorEmail,
              rules () {
                return [
                  this.getRequiredRules({
                    trigger: 'change',
                    message: '请填写登录邮箱'
                  }), this.getValidatorRules('', 'blur', {
                    type: 'email',
                    message: '请输入正确的邮箱地址'
                  })
                ]
              }
            },
            label: '邮箱',
            prefixIcon: 'user-tie',
            placeholder: '请填写登录邮箱'
          },
          {
            attrs: {
              prop: 'password',
              error: this.inputErrorPassword,
              rules () {
                return this.getRequiredRules({
                  trigger: 'change',
                  message: '请填写密码'
                })
              }
            },
            link: {
              text: '忘记密码',
              click () {
                console.log(this, 'wo 忘记密码了。。。。')
              }
            },
            type: 'password',
            label: '密码',
            prefixIcon: 'lock',
            placeholder: '请填写密码'
          }
        ]
      }
    }
  },
  created () {
    this.setLoading(true)
  },
  mounted () {
    this.$nextTick(() => {
      this.setLoading(false)
    })
  },
  methods: {
    setLoading (isLoading = false) {
      this.isLoading = isLoading
    },
    onSubmit (refForm) {
      if (this.isLoading) return

      refForm.validate(async valid => {
        if (!valid) return
        this.inputErrorEmail = ''
        this.inputErrorPassword = ''

        this.setLoading(true)
        const { error, data, msg } = await this.$store.dispatch(UserAccountModule.getAction('login'), this.formData)
        if (error) {
          this.inputErrorEmail = ' '
          this.inputErrorPassword = msg
          this.setLoading(false)
          return
        }

        this.$message({
          type: 'success',
          message: '登录成功',
          showClose: true
        })
        Cookie.set('token', data.user.token)
        Cookie.set('name', data.user.username)
        this.$router
          .replace('/')
          .catch(() => {})
      })
    },
    tooglePassword () {
      this.showPassword = !this.showPassword
    }
  }
}

</script>

<style lang="scss" scoped>
.user-account-login {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 100vh;
  background-color: #f0f2f5;
  background-image: url('~@/assets/images/logo-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .user-account-nav {
    position: absolute;
    top: 36px;
    left: 36px;
    display: flex;
    align-items: center;
    color: #f0f2f5;
    .nav-logo {
      width: 30px;
      height: 30px;
      background-image: url('~@/assets/images/vue.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .nav-circle {
      width: 6px;
      height: 6px;
      margin: 0 10px;
      border-radius: 50%;
      background: #f0f2f5;
    }
    .nav-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
    }
  }
}

@media screen and (max-width: 600px) {
  .user-account-container-layout {
    justify-content: center;
    .user-account-nav {
      left: 0;
      right: 0;
      margin: auto;
      justify-content: center;
    }
  }
}
</style>
