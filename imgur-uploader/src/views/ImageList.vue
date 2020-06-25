<template>
  <div class="image-list">
    <img
      class="image"
      v-for="image in allImages"
      v-bind:key="image.id"
      :src="image.link"
      :alt="image.title"
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
.image {
  display: block;
  height: 300px;
  width: 300px;
}
</style>
