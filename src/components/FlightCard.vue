<template>
  <div>
    <router-link
      :to="{
        name: 'flight-show',
        params: { id: flight.id, title: flight.title, length: flight.length },
      }"
    >
      <div class="card">
        <h2>{{ flight.title }}</h2>
        <p>Length: {{ flight.length }} hours</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    flight: Object,
  },
  methods: {
    book() {
      console.log('test')
    },
  },
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
.card:hover {
  background-color: green;
  color: white;
  transition-duration: 0.6s;
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
