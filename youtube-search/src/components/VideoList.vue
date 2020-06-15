<template>
  <aside class="video-list">
    <div
      v-for="video in videos.filter((v) => v !== mainVideo)"
      v-bind:key="video.id.videoId"
    >
      <div
        class="video-li"
        @click="$emit('handleSetVideoPlayer', video.id.videoId)"
      >
        <VideoItem :url="video.snippet.thumbnails.high.url" />
        <h4>
          {{ decodeHtmlEntity(video.snippet.title.substring(0, 25) + "...") }}
        </h4>
        <br />
      </div>
    </div>
  </aside>
</template>

<script>
import VideoItem from "./VideoItem.vue";

export default {
  name: "VideoList",
  components: {
    VideoItem,
  },
  props: ["videos", "mainVideo"],
  methods: {
    decodeHtmlEntity(str) {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    },
  },
};
</script>

<style>
ul,
li {
  all: unset;
}
.video-list {
  display: flex;
  flex-direction: column;
  justify-items: left;
}
.video-li {
  cursor: pointer;
  display: flex;
}
img {
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}
</style>
