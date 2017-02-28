<template>
    <div class="web">
        <a v-for="item in web">
            {{item.name}}
        </a>
    </div>
</template>

<script>
  import { requestLogin } from '../api/api';
  import NProgress from 'nprogress'
  export default {
    data() {
      return {
        web: [
        {name: '英雄联盟'},
        {name: '新闻'}
        ],
      };
    },
    methods: {
    }
  }

</script>

<style lang="sass" scoped>
    .web
        display: flex
        display: -webkit-flex
        flex-wrap: wrap
        color: #fff
        a
            display: block
            width: 100px
            height: 100px
</style>