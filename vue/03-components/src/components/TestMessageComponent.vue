<template>
    <div>
        <p>{{ message }}</p>
        <app-input></app-input>
    </div>
</template>

<script>
    import LocalComponent from "./LocalComponent";

    export default {
        data() {
            return {
                message: 'Custom message'
            }
        },
        components: {
            'app-input': LocalComponent
        }
    }    
</script>