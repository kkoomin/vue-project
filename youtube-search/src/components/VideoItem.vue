<template>
  <iframe
    width="942"
    height="524"
    :src="`https://www.youtube.com/embed/${$attrs.id}`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: "VideoItem",
};
</script>

<style></style>
