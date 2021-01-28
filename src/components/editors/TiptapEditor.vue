<template>
  <div>
    <h1 class="my-8 text-4xl font-semibold">
      Tiptap v2 editor
    </h1>
    <!-- Create the editor container -->
    <div class="flex justify-between space-x-8">
      <div class="w-1/2">
        <!-- Titap Vue template is not working right now -->
        <!-- <editor-content :editor="editor" /> -->
        <!-- So Tiptap Vanilla template is used -->
        <div class="element" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { Editor, EditorContent, defaultExtensions } from '@tiptap/vue-starter-kit'
import { Editor } from '@tiptap/core'
import { defaultExtensions } from '@tiptap/starter-kit'

export default {
  components: {
    // EditorContent,
  },

  setup() {
    const editor = ref(null)
    const content = ref(null)

    onMounted(() => {
      editor.value = new Editor({
        element: document.querySelector('.element'),
        extensions: defaultExtensions(),
        content: '<p>This is just a boring paragraph</p>',
        onUpdate: ({ getJSON, getHTML }) => {
          content.value = getJSON()
        },
      })
    })

    onBeforeUnmount(() => {
      editor.value && editor.value.destroy()
    })

    return {
      getContent() {
        content.value = editor.value && editor.value.getJSON()
      },

      content,
    }
  },
}
</script>

<style lang="scss" scoped></style>
