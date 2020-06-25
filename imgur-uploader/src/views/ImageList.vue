<template>
  <div class="image-list">
    {{ $store.state.images }}
    <img
      v-for="image in allImages"
      v-bind:key="image.id"
      :src="image.link"
      :alt="image.title"
      height="300px"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: { ...mapActions(["fetchImages"]) },
  created() {
    this.fetchImages();
  }
};
</script>

<style></style>
