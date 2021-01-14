<template>
  <div class="container">
    <img class="block mx-auto" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <hr class="my-12" />
    <QuillEditor msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import QuillEditor from "./components/editors/Quill.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
