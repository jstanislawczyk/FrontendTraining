<template>
    <div>
        <p>{{ message }}</p>
        <app-input :msg="message" @messageChange="message = $event"></app-input>
    </div>
</template>

<script>
    import LocalComponent from "./LocalComponent";

    export default {

        data() {
            return {
                message: 'Custom test message'
            }
        },
        components: {
            'app-input': LocalComponent
        }
    }    
</script>