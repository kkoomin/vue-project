<template>
  <div class="ui secondary pointing menu">
    <router-link :to="{ name: 'ImageList' }" class="active item">
      Image Uploader
    </router-link>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link :to="{ name: 'ImageList' }" class="item"
          >Gallery</router-link
        >
        <router-link :to="{ name: 'UploadForm' }" class="item"
          >Upload</router-link
        >
        <a class="item" @click="logout">Logout</a>
      </div>
      <div v-else>
        <a @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: { ...mapActions(["login", "logout"]) },
  computed: mapGetters(["isLoggedIn"]),
};
</script>

<style>
.horizontal {
  display: flex;
}
</style>
