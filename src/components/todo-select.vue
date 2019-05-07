<template>
    <div>
        <input v-model="inputValue" @click="handleShow"/>
        <ul v-if="show" class="dec">
            <li v-for="(item,index) in list" 
                :key="index"
                @click="handleClick(item.message)"
                class="dev"
            >
                {{item.message}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'child',
    data () {
        return {
            show: false,
            inputValue: '',
            list:[
                {message: 'Foo'},
                {message: 'Boo'},
                {message: 'Duu'},
                {message: 'Tnn'}
            ]
        }
        
    },
    methods: {
        handleClick (msg) {
        this.inputValue = msg;
        },
        handleShow () {
            this.show = true;
        }
    }
}
</script>



