<template>
    <dl class="web">
        <dd>
            主体网站
        </dd>
        <dd v-for="item in web" @click="choose(item.path)">
            {{item.name}}
        </dd>
        <dd v-for="item in web" @click="choose(item.path)">
            {{item.name}}
        </dd>
        <dd>
            <router-link :to="{ name: 'webadd'}">+增加网站</router-link>
        </dd>
    </dl>
</template>

<script>
  import { postRequest } from '../../api/api';
  import { web } from '../../data'
  import NProgress from 'nprogress'
  export default {
    data() {
      return {
        web: [],
      };
    },
    methods: {
        getList() {
            this.loading = true;
            NProgress.start();
            postRequest({
                url: 'web/list'
            }).then((res) => {
                this.web = res;
                console.log(res)
                NProgress.done();
            });
        },
        choose(e){
            console.log(e)
            web.val = e;
            this.$router.push({ path: '/table' });
        }
    },
    mounted() {
			this.getList();
		}
  }

</script>

<style lang="sass" scoped>
    .web
        height: 100%
        display: flex
        display: -webkit-flex
        flex-wrap: wrap
        justify-content: center
        align-items: center
        align-content: center
        color: #fff
        dd
            height: 100px
            width: 100px
            background-color: antiquewhite
            color: #3f3f3f
            border-radius: 100%
            margin: 10px
            text-align: center
            line-height: 100px
</style>