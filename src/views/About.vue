<template>
  <div class="about">
    <h1>singo crud 练习</h1>
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