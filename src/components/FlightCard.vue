<template>
  <div>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>Length: {{ length }} hours</p>
      <button class="bookButton">Book Flight</button>
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
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
  .bookButton {
    background-color: aliceblue;
    padding: 15px 32px;
    display: inline-block;
    border-radius: 4px;
  }
  .bookButton:hover {
    padding: 20px 37px;
    transition-duration: 0.4s;

  }
</style>