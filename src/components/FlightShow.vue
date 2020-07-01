<template>
  <div>
    <h2 :id="id">Now viewing flight no.{{ flight.id }}</h2>
    <h2>{{ flight.title }}</h2>
    <h2>Which will take aproximately {{ flight.length }} hours</h2>
  </div>
</template>

<script>
import FlightService from '@/services/FlightService.js'
export default {
  props: ["id"],
  data() {
    return {
      flight: {}
    }
  },
  created() {
    FlightService.getFlight(this.id)
    .then(response => {
      this.flight = response.data
    })
    .catch(error => {
      console.log("There was an error", error.response)
    })
  }
};
</script>

<style lang="scss" scoped>
</style>