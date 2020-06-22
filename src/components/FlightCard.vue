<template>
  <div>
    <div>
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
</style>