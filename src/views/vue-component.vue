<template>
    <div>
        <p>总数：{{total}}</p>
        <my-component
           v-model="total"
        ></my-component>
    </div>
</template>
<script>
import myComponent from '@/components/my-component'
export default {
    name:'',
    components: {
        'my-component':myComponent
    },
    data () {
        return {
            total:0
        }
    },
    methods: {
        handleGetTotal (total){
            this.total=total;
        }
    }
}
</script>
