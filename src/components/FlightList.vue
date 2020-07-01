<template>
  <div>
    <h1>Showing List of Flights</h1>
    <div>
      <FlightCard v-for="flight in flights" :key="flight.id" :flight="flight" />
      <router-link to="/create">Add a Flight</router-link>
    </div>
  </div>
</template>

<script>
import FlightService from '@/services/FlightService.js'
import FlightCard from '@/components/FlightCard.vue'
export default {
  components: {
    FlightCard,
  },
  data() {
    return {
      flights: [],
    }
  },
  methods: {
    updateFlights() {
      this.flights.push
    },
  },
  created() {
    FlightService.getFlights()
      .then((response) => {
        this.flights = response.data
      })
      .catch((error) => {
        console.log('There was an error' + error.response)
      })
  },
}
</script>

<style lang="scss" scoped></style>
