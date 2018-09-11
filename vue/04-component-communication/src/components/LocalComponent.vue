<template>
    <div>
        <br />
        <p>
            Type something: <input type="text" :value="msg" @input="changeMessage">
        </p>
        <p>Message: {{ message }}</p>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        data() {
            return {
                message: ''
            }
        },
        methods: {
            changeMessage(event) {
                this.message = event.target.value;
                this.$emit('messageChange', this.message);
            }
        }
    }
</script>