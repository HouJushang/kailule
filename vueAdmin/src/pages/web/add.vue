<template>
    <div class="webadd">
        <el-input v-model="name" placeholder="name"></el-input>
        <el-input v-model="path" placeholder="path"></el-input>
        <el-button type="primary" @click="submit()">提交</el-button>
    </div>
</template>

<script>
  import { postRequest } from '../../api/api';
  import NProgress from 'nprogress'

  export default {
    data() {
      return {
        name: '',
        path: ''
      };
    },
    methods: {
        submit() {
            NProgress.start();
            postRequest({
                url: 'web/add',
                body: {
                    name: this.name,
                    path: this.path
                }
            }).then(result=>{
                 console.log(result);
                 this.$router.push({ path: '/web' });
                 NProgress.done();
            })
        }
    }
  }
</script>

<style lang="sass" scoped>
    .webadd
        width: 400px
        padding: 40px
        margin: 0 auto
        .el-input
            margin-bottom: 20px
</style>