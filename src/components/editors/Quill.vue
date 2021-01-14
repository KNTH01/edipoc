<template>
  <div>
    <!-- Create the editor container -->
    <div id="editor">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br /></p>
    </div>

    <button class="my-6 button" @click="getContent">Get Content</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Quill from "quill";

export default {
  setup() {
    const quill = ref(null);

    onMounted(() => {
      console.log(' on est la ');
      quill.value = new Quill("#editor", {
        theme: "snow",
      });
    });

    return {
      getContent() {
        if (quill.value) {
          console.log(quill.value)
          console.log(JSON.stringify(quill.value.getContents()));
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
