<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="4" v-for="v in videos" :key="v.id">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{v.title}}</span>
            <div class="bottom clearfix">
              <span class="info">{{ v.info }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import * as API from '@/api/note'

export default {
  name: 'home',
  components: {},
  data() {
    return {
      videos: [],
    }
  },
  methods: {
    load() {
      API.getNotes().then(res => {
        this.videos = res.data
      })
    }
  },
  beforeMount() {
    this.load()
  }
}
</script>

<style>
.info {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}


.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
