<template>
    <div>
        <button @click="handleIncrease">+1</button>
        <button @click="handleReduce">-1</button>
    </div>
</template>
<script>
export default {
    name: '',
    data () {
            return {
                counter:0
            }
        },
        methods: {
            handleIncrease(){
                this.counter++;
                this.$emit('input',this.counter);
            },
            handleReduce() {
                this.counter--;
                this.$emit('input',this.counter);
            }
        }
}
</script>

