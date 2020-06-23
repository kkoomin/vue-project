<template>
  <div>
    <h1>Todo List</h1>
    <input
      type="text"
      v-model="contentInput"
      placeholder="Type your todo..."
      @keypress.enter="addTodo"
    />

    <div>
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">
          <input type="checkbox" v-model="todo.isCompleted" />{{ todo.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Todos",
  data() {
    return { todos: [], contentInput: "", newTodo: null };
  },
  methods: {
    addTodo() {
      // enter가 눌러졌을때, firebase API를 통해 데이터 저장
      this.newTodo = {
        content: this.contentInput,
        isCompleted: false,
        createdAt: new Date(),
      };
      this.todos.unshift(this.newTodo);
    },
    getTodos() {
      // firebase database (firestore)에 요청보내어
      db.collection("todos")
        // todos 데이터를 받아와
        .orderBy("createdAt")
        .get()
        .then((snapshot) => {
          // this.todos 채워 넣기
          snapshot.forEach((doc) => {
            this.todos.unshift({
              id: doc.id,
              content: doc.data().content,
              isCompleted: doc.data().isCompleted,
              createdAt: doc.data().createdAt,
            });
          });
        });
    },
  },
  watch: {
    todos: function() {
      if (this.newTodo)
        db.collection("todos")
          .add({ ...this.newTodo })
          .then(() => {
            this.contentInput = "";
            // todos 리로드 (새로운 데이터가 추가된 todos로 변경)
          });
    },
  },
  created() {
    this.getTodos();
  },
};

/* todos: function(val, oldVal) {
  if (oldVal.length !== 0)
    db.collection("todos")
      .add(val[0])
      .then(() => {
        this.contentInput = "";
      });
}, */
</script>

<style></style>
