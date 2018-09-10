<template>
  <div>
    <h1>{{ hello }}</h1>
    <h2 v-if="!seen">You can see this</h2>
    <h2 v-if="seen">This is hidden</h2>

    <li v-for="text in structure">
      {{ text.text }}
    </li>

    <br />
    <button v-on:click="logInfo">Click me</button>
    <br />
    <router-link to="/test"><button>Go to Test</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      seen: false,
      hello: 'Hello world',
      structure: [
        { text: 'text 1' },
        { text: 'text 2' },
        { text: 'text 3' }
      ] 
    }
  },
  methods: {
    logInfo: function() {
      console.log(123);
    }
  }
}
</script>

<style>
  h1, h2 {
    color: green;
  }
</style>
