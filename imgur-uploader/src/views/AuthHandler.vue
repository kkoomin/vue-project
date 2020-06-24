<template>
  <div class="auth-handler">Logging In...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(location.hash);
  },
};
</script>

<style></style>
