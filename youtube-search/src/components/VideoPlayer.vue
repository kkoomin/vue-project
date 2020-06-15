<template>
  <section class="video-player">
    <!-- <div v-if="$attrs.videos.length > 0">
      <h3>{{ decodeHtmlEntity($attrs.videos[0].snippet.title) }}</h3>
      <VideoItem :id="$attrs.videos[0].id.videoId" />
    </div> -->
    <div v-if="$attrs.mainVideo">
      <!-- <h3>{{ decodeHtmlEntity($attrs.videos[0].snippet.title) }}</h3> -->
      <VideoItem :id="$attrs.mainVideo.id.videoId" />
    </div>
  </section>
</template>

<script>
import VideoItem from "./VideoItem.vue";

export default {
  name: "VideoPlayer",
  components: {
    VideoItem,
  },
  methods: {
    decodeHtmlEntity(str) {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    },
  },
};
</script>

<style></style>
