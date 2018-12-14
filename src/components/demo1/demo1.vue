<template>
    <div class="demo1">
        <span>
            这是一个demo
        </span>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'demo1',
    created(){
        //给setDemo1传参数
        this.setDemo1('我是demo1')
    },
    mounted(){
        this.getDemo1();
    },
    methods: {
        //调用store中Mutations中的方法setDemo1
        ...mapMutations(['setDemo1']),
        getDemo1(){
            console.log('获取vuex的demo1的值', this.demo1)
        }
    },
    computed: {
        ...mapGetters(['demo1']) //取state中demo1的值
    }
}
</script>
<style lang="less" scoped>
.demo1{
    span{
        font-size:0.2rem;
    }
}
</style>
