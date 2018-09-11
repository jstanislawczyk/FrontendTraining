<template>
    <div>
        <br />
        <p>
            Type something: <input type="text" v-model="message">
        </p>
        <p>Message: {{ message }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: ''
            }
        }
    }
</script>