<template>
  <div>
    <h1>Showing List of Flights</h1>
    <div>
      <FlightCard
        v-for="flight in flights"
        :key="flight.id"
        :id="flight.id"
        :title="flight.title"
        :length="flight.length"
      />
    </div>
  </div>
</template>

<script>
import FlightCard from "@/components/FlightCard.vue";
export default {
  components: {
    FlightCard
  },
  data() {
    return {
      flights: [
        {
          id: 1,
          title: "Edmonton to Toronto",
          length: 4.5
        },
        {
          id: 2,
          title: "Vancouver to Montreal",
          length: 8
        },
        {
          id: 3,
          title: "Calgary to Las Vegas",
          length: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
