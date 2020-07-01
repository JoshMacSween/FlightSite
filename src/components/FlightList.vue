<template>
  <div>
    <h1>Showing List of Flights</h1>
    <div>
      <FlightCard v-for="flight in flights" :key="flight.id" :flight="flight" :id="flight.id"
      :title="flight.title" :length="flight.length"/>
      <router-link to="/create">Add a Flight</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FlightCard from '@/components/FlightCard.vue'
export default {
  components: {
    FlightCard
  },
  data() {
    return {
      flights: []
    }
  },
  methods: {
    updateFlights() {
      this.flights.push
    },
  },
  created() {
    axios
      .get('http://localhost:3000/flights')
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
