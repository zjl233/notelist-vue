<template>
  <div class="post-video">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Info">
        <el-input type="textarea" v-model="form.info"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as API from '@/api/note'

export default {
  data() {
    return {
      form: {
        title: '',
        info: '',
      }
    }
  },
  methods: {
    onSubmit() {
      API.postNote(this.form).then((res) => {
        if (res.code > 0) {
          this.$notify.error({
            title: '投稿失败',
            message: res.msg,
          });
        } else {
          this.$notify({
            title: '投稿成功',
            message: `您投稿的ID为${res.data.id}`,
            type: 'success',
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
  },
}
</script>