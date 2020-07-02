<template>
  <div class="createCard">
    <h3>Creating a Flight Listing</h3>
    <hr>
    <h3>User no.{{ userId }} {{ userName }}</h3>
    <span>{{ categories }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: mapState({
      userName: state => state.user.name,
      userId: state => state.user.id,
      categories: state => state.categories
    })
  }
</script>

<style scoped>
  .createCard {
    width: 50%;
    margin-left: 25%;
    border: 3px solid green;
    border-radius: 3px;
    padding: 25px;
  }

  .form-control {
    margin: 5px;
  }
</style>