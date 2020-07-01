<template>
  <div class="createCard">
    <h1>Create a Flight Listing</h1>
    <form>
      <div class="form-group">
        <label for="title">Starting and ending point:</label>
        <input type="text" class="form-control" id="title">
        <label for="length">Length of flight:</label>
        <input type="text" class="form-control" id="length">
      </div>
      <button @click="addFlight" type="submit" class="btn btn-primary">Create</button>

    </form>

  </div>
</template>

<script>
  export default {
    methods: {
      addFlight() {
        this.$emit('add-to-flights')
      }
    }
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