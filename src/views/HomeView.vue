<template>  

  <div class="container">
    <div class="abs-center">
      <img alt="Vue logo" src="../assets/logo.png" width="150">
      <h1>@Adroc65</h1>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="goToDaybook" type="button" class="btn btn-primary">Daybook</button>
        <button type="button" class="btn btn-secondary">Middle</button>
        <button type="button" class="btn btn-success">Right</button>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    methods: {
      goToDaybook() {
        this.$router.push({ name: 'no-entry'})
      }
    }
  }

</script>

<style scoped>
.abs-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;
}

</style>