<template>
  <div class="user-account-container-layout">
    <div class="form-title">
      <div class="form-title-icon">
        <IconFont
          v-if="titleIcon"
          :icon="titleIcon"
        />
        <slot name="titleIcon"></slot>
      </div>
      <p class="form-title-text">
        {{ title }}
      </p>
      <p class="form-desc-text">
        {{ desc }}
      </p>
    </div>
    <el-form
      ref="boxForm"
      :model="formData"
      label-position="top"
      hide-required-asterisk
      @keyup.enter.native="onSubmit()"
    >
      <template
        v-for="(formItem, index) in formConfig"
      >
        <el-form-item
          :key="index"
          v-bind="getFormItemAttrs(formItem.attrs)"
        >
          <div class="form-custom-label">
            <p>{{ formItem.label }}</p>
            <el-link
              v-if="formItem.link"
              type="primary"
              :underline="false"
              @click="handleClickLink(formItem.link)"
            >
              {{ formItem.link.text }}
            </el-link>
          </div>
          <el-input
            v-model="formData[formItem.attrs.prop]"
            v-bind="getInputItemAttrs(formItem)"
          >
            <font-awesome-icon
              v-if="formItem.prefixIcon"
              slot="prefix"
              class="input-icon-prefix"
              :icon="formItem.prefixIcon"
            />
            <font-awesome-icon
              v-if="formItem.type === 'password'"
              slot="suffix"
              class="input-icon-lock"
              :icon="showPassword ? 'eye' : 'eye-slash'"
              @click="tooglePassword()"
            />
          </el-input>
        </el-form-item>
      </template>
      <div
        v-for="(actionItem, index) in actionList"
        :key="`${index}-`"
        class="submit-form-action-list"
      >
        <el-button
          v-bind="actionItem.attrs"
          class="submit-form-action-button"
          v-on="getActionItemEvent(actionItem.on) || {}"
        >
          {{ actionItem.text }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>

import { omit } from 'lodash'

import { isFunction } from '@/utils/type'

export default {
  name: 'UserAccountContainerLayout',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    titleIcon: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    actionList: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    formData: {
      type: Object,
      default () {
        return {}
      },
      required: true
    },
    formConfig: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  data () {
    return {
      showPassword: false
    }
  },
  computed: {
    isFunction () {
      return isFunction
    }
  },
  methods: {
    getInputItemAttrs (formItem) {
      const attrs = {}
      const isPassword = formItem.type === 'password'
      if (isPassword) {
        attrs.type = this.showPassword ? 'text' : 'password'
      } else {
        attrs.type = 'text'
      }

      return {
        clearable: !isPassword,
        placeholder: formItem.placeholder,
        ...attrs
      }
    },
    getFormItemAttrs (attrs) {
      const rules = isFunction(attrs.rules)
        ? attrs.rules.call(this)
        : ''

      return {
        rules,
        ...omit(attrs, ['rules'])
      }
    },
    getActionItemEvent (on) {
      const onEvent = {}
      Object.keys(on).forEach((onItem) => {
        onEvent[onItem] = on[onItem].bind(this.$parent, this.$refs.boxForm)
      })
      return onEvent
    },
    tooglePassword () {
      this.showPassword = !this.showPassword
    },
    handleClickLink (link) {
      link.click.call(this.$parent, this.$refs.boxForm)
    },
    onSubmit () {
      this.$emit('on-submit', this.$refs.boxForm)
    }
  }
}

</script>

<style lang="scss" scoped>
.user-account-container-layout {
  width: 438px;
  margin-right: 80px;
  padding: 60px 34px;
  background: #fff;
  box-shadow: 3px 6px 12px 0px rgba(0, 0, 0, 0.15), 1px 4px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  user-select: none;
  /deep/ .el-input .el-input__inner {
    letter-spacing: 1px;
  }
  .form-custom-label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
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
    align-items: center;
    padding-bottom: 30px;
    .form-title-icon {
      width: 32px;
      font-size: 32px;
      margin-right: 10px;
    }
    .form-title-text {
      font-size: 26px;
      font-weight: 600;
    }
    .form-desc-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      padding: 44px 0 0px;
    }
  }
  .submit-form-action-list {
    display: flex;
    margin-top: 40px;
    .submit-form-action-button {
      flex: 1;
    }
  }
}

@media screen and (max-width: 600px) {
  .user-account-container-layout {
    width: 95%;
    margin: auto;
  }
}
</style>
