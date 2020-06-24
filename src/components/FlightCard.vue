<template>
  <div>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>Length: {{ length }} hours</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'length']
  }
</script>

<style scoped>
  .card {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin-bottom: 10px;
}
</style>