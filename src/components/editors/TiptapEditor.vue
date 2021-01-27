<template>
  <div>
    <h1 class="my-8 text-4xl font-semibold">
      Quill Editor
    </h1>
    <!-- Create the editor container -->
    <div class="flex justify-between space-x-8">
      <div class="w-1/2">
        <editor-content :editor="editor" />

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
import { Editor, EditorContent, defaultExtensions } from '@tiptap/vue-starter-kit'

export default {
  components: {
    EditorContent,
  },

  setup() {
    const editor = ref(null)
    const content = ref(null)

    onMounted(() => {
      editor.value = new Editor({
        extensions: defaultExtensions(),
        content: '<p>This is just a boring paragraph</p>',
        onUpdate: ({ getJSON, getHTML }) => {
          content.value = getJSON()
        },
      })
    })

    onBeforeUnmount(() => {
      if (editor.value)
        editor.value.destroy()
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
