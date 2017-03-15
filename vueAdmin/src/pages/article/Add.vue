<template>
    <div>
        <articleForm/>
    </div>
</template>
<style>

</style>
<script>
    import articleForm from '../../component/articleForm.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            articleForm,
        }
    }
</script>
