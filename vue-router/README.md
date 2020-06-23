# vue-router

> https://router.vuejs.org/

## Install Command

`vue add router` : 프로젝트의 구조를 바꾸면서 router 사용 세팅

## How to work

- `index.js`에서 규칙 정의
- `App.vue`에 `router-link`와 `router-view` 세팅
  ```js
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
  ```
- `src`안에 새롭게 `router`>`index.js`와 `views`>`각 페이지 vue파일` 생성
