<template>
  <div class="image-container">
    <img
      class="image"
      v-for="image in allImages"
      v-bind:key="image.id"
      :src="image.link"
      :alt="image.name"
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

<style>
.image-container {
  column-count: 3;
  column-gap: 0;
}
.image {
  padding: 5px;
  max-width: 100%;
}
</style>
