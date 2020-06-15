<template>
  <section class="search-bar">
    <input
      class="search-input"
      v-model="inputValue"
      @keypress.enter="$emit('handleInput', inputValue)"
      type="text"
    />
  </section>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>

<style>
.search-bar {
  margin-bottom: 4rem;
}
.search-input {
  width: 15rem;
  height: 2rem;
  padding: 0 0.5rem;
}
</style>
