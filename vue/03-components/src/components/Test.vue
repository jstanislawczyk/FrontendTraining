<template>
  <div class="test">
    <h1>{{ test }}</h1>
    <router-link to="/"><button>Go to Home</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      test: 'Test message'
    }
  }
}
</script>

<style>
  .test h1, h2 {
    color: red;
  }
</style>
