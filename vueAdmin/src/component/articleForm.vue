<template>
    <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
            <el-input v-model="form.keywords"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="发布">
            <el-select v-model="form.type" placeholder="选择发布">
                <el-option label="上线" value="1"></el-option>
                <el-option label="待上线" value="2"></el-option>
                <el-option label="待审核" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="内容">
            <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即添加</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import NProgress from 'nprogress'
    import {postRequest} from '../api/api'
	export default {
		data() {
			return {
				form: {
					title: '',
					keywords: '',
					description: '',
					type: '',
					content: '',
				}
			}
		},
		methods: {
			onSubmit() {
				NProgress.start();
                postRequest({
                    url: 'article/add',
                    body: this.form
                }).then(result=>{
                     NProgress.done();
                     this.$router.push({ path: '/list' })
                })
			}
		}
	}

</script>