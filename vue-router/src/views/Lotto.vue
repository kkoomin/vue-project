<template>
  <div>
    <h1>Lotto 번호 생성</h1>
    <button @click="getNumbers">랜덤 번호 생성</button>
    <h3 v-if="numbers">추천 로또 번호는 {{ numbers }} 입니다 🎲</h3>
    <h3 v-if="bonus">추천 보너스 번호는 {{ bonus }} 입니다 🎲</h3>
  </div>
</template>

<script>
export default {
  name: "Lotto",
  data() {
    return {
      numbers: null,
      bonus: null,
    };
  },
  methods: {
    getNumbers() {
      const numbers = [];
      while (numbers.length < 7) {
        const newNumber = Math.ceil(Math.random() * 45);
        !numbers.includes(newNumber) ? numbers.push(newNumber) : null;
      }
      this.bonus = numbers.shift();
      this.numbers = numbers.sort((a, b) => a - b).toString();
    },
  },
};
</script>

<style></style>
