<template>
  <div>
    <h1 class="my-8 text-4xl font-semibold">Editor.js</h1>
    <!-- Create the editor container -->
    <div class="flex justify-between space-x-8">
      <div class="w-1/2">
        <div id="editorjs"></div>

        <button class="my-6 button" @click="getContent">Get Content</button>
      </div>

      <pre class="w-1/2 overflow-auto pre-content">
        {{ content }}
      </pre>
    </div>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const editor = ref(null)
    const content = ref(null)

    onMounted(() => {
      editor.value = new EditorJS({ holder: 'editorjs' })
    })

    onBeforeUnmount(() => {
      if (editor.value) {
        // editor.value.destroy();
      }
    })

    return {
      getContent() {
        if (editor.value) {
          editor.value
            .save()
            .then((outputData) => {
              content.value = JSON.stringify(outputData)
            })
            .catch((error) => {
              console.log('Saving failed: ', error)
            })
        }
      },
      content,
    }
  },
}
</script>

<style lang="scss" scoped></style>
