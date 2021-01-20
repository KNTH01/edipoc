<template>
  <div>
    <h1 class="my-8 text-4xl font-semibold">
      Quill Editor
    </h1>
    <!-- Create the editor container -->
    <div class="flex justify-between space-x-8">
      <div class="w-1/2">
        <div id="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br></p>
        </div>

        <button class="my-6 button" @click="getContent">
          Get Content
        </button>
      </div>

      <pre class="w-1/2 overflow-auto pre-content">
        {{ content }}
      </pre>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Quill from 'quill'

export default {
  setup() {
    const quill = ref(null)
    const content = ref(null)

    onMounted(() => {
      quill.value = new Quill('#editor', {
        theme: 'snow',
      })
    })

    return {
      getContent() {
        if (quill.value)
          content.value = JSON.stringify(quill.value.getContents())
      },
      content,
    }
  },
}
</script>

<style lang="scss" scoped></style>
