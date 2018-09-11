<template>
  <div class="test">
    <h1>{{ test }}</h1>
    <router-link to="/"><button>Go to Home</button></router-link>
    <p>Id is {{ $route.params.testId }}</p>
    <router-link to="/test/10"><button>Go to Test</button></router-link>
    <router-link to="/test/20"><button>Go to Test</button></router-link>

    <button @click="goHome">Go home with button</button>
  </div>
</template>

<script>
export default {

  name: 'Test',
  data () {
    return {
      test: 'Test message'
    }
  },
  watch: {
    '$route' (to, from) {
      alert(to.params.testId);
    }
  },
  created() {
    alert(this.$route.params.testId)
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style>
  .test h1, h2 {
    color: red;
  }
</style>
