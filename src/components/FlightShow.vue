<template>
  <div>
    <h2 :id="id">Now viewing flight no.{{ id }}</h2>
    <h2>{{ title }}</h2>
    <h2>Which will take aproximately {{ length }} hours</h2>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "length"]
};
</script>

<style lang="scss" scoped>
</style>