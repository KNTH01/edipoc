<template>
  <div class="container">
    <QuillEditor msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script setup>
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
