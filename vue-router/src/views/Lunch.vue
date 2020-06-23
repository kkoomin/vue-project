<template>
  <div class="lunch">
    <h1>점심메뉴 추천</h1>
    <button @click="pick">랜덤메뉴 추천</button>
    <h3>{{ choice }}</h3>
  </div>
</template>

<script>
export default {
  name: "Lunch",
  data() {
    return {
      menu: ["노랑통닭", "소풍", "김밥카페", "양자강", "순남시래기"],
      choice: null,
    };
  },
  methods: {
    pick() {
      this.choice = this.menu[Math.floor(Math.random() * this.menu.length)];
    },
  },
};
</script>

<style></style>
