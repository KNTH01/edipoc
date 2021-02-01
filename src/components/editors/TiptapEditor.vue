<template>
  <div>
    <h1 class="my-8 text-4xl font-semibold">
      Tiptap v2 editor
    </h1>
    <div class="flex justify-between space-x-8">
      <div class="w-1/2">
        <div v-if="editor" class="w-full">
          <button
            @click="
              editor
                .chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            "
          >
            insertTable
          </button>

          <template v-if="editor.isActive('table')">
            <button
              v-if="editor.can().addColumnBefore()"
              @click="editor.chain().focus().addColumnBefore().run()"
            >
              addColumnBefore
            </button>
            <button
              v-if="editor.can().addColumnAfter()"
              @click="editor.chain().focus().addColumnAfter().run()"
            >
              addColumnAfter
            </button>
            <button
              v-if="editor.can().deleteColumn()"
              @click="editor.chain().focus().deleteColumn().run()"
            >
              deleteColumn
            </button>
            <button
              v-if="editor.can().addRowBefore()"
              @click="editor.chain().focus().addRowBefore().run()"
            >
              addRowBefore
            </button>
            <button
              v-if="editor.can().addRowAfter()"
              @click="editor.chain().focus().addRowAfter().run()"
            >
              addRowAfter
            </button>
            <button
              v-if="editor.can().deleteRow()"
              @click="editor.chain().focus().deleteRow().run()"
            >
              deleteRow
            </button>
            <button
              v-if="editor.can().deleteTable()"
              @click="editor.chain().focus().deleteTable().run()"
            >
              deleteTable
            </button>
            <button
              v-if="editor.can().mergeCells()"
              @click="editor.chain().focus().mergeCells().run()"
            >
              mergeCells
            </button>
            <button
              v-if="editor.can().splitCell()"
              @click="editor.chain().focus().splitCell().run()"
            >
              splitCell
            </button>
            <button
              v-if="editor.can().toggleHeaderColumn()"
              @click="editor.chain().focus().toggleHeaderColumn().run()"
            >
              toggleHeaderColumn
            </button>
            <button
              v-if="editor.can().toggleHeaderRow()"
              @click="editor.chain().focus().toggleHeaderRow().run()"
            >
              toggleHeaderRow
            </button>
            <button
              v-if="editor.can().toggleHeaderCell()"
              @click="editor.chain().focus().toggleHeaderCell().run()"
            >
              toggleHeaderCell
            </button>
            <button
              v-if="editor.can().mergeOrSplit()"
              @click="editor.chain().focus().mergeOrSplit().run()"
            >
              mergeOrSplit
            </button>
            <button
              v-if="editor.can().setCellAttribute('colspan', 2)"
              @click="
                editor.chain().focus().setCellAttribute('colspan', 2).run()
              "
            >
              setCellAttribute
            </button>
            <button
              v-if="editor.can().fixTables()"
              @click="editor.chain().focus().fixTables().run()"
            >
              fixTables
            </button>
            <button
              v-if="editor.can().goToNextCell()"
              @click="editor.chain().focus().goToNextCell().run()"
            >
              goToNextCell
            </button>
            <button
              v-if="editor.can().goToPreviousCell()"
              @click="editor.chain().focus().goToPreviousCell().run()"
            >
              goToPreviousCell
            </button>
          </template>
        </div>

        <!-- Titap Vue template is not working right now -->
        <!-- <editor-content :editor="editor" /> -->
        <!-- So Tiptap Vanilla template is used -->
        <div class="my-12 element" />
        <button class="my-6 button" @click="getContent">
          Get Content
        </button>

        <pre class="w-1/2 overflow-auto pre-content">
        {{ content }}
      </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { Editor, EditorContent, defaultExtensions } from '@tiptap/vue-starter-kit'
import { Editor } from '@tiptap/core'
import { defaultExtensions } from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'

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
        extensions:
        [
          ...defaultExtensions(),
          Table.configure({
            resizable: true,
          }),
          TableRow,
          TableHeader,
          TableCell,
        ],
        content: `
        <h1>
          Fun with tables
        </h1>
        <p>
          Greeks were the first people to use a table as a dining place. Not sure why they put their plates on a computer display, but I don’t care. If you want to create your own table, tiptap got you covered. No matter, what you want to do with those tables.
        </p>
        <h2>
          Amazing features
        </h2>
        <ul>
          <li>tables with rows, headers and cells</li>
          <li>Support for <code>colgroup</code> and <code>rowspan</code></li>
          <li>Resizable columns</li>
        </ul>
        </ul>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>singer</td>
              <td>songwriter</td>
              <td>actress</td>
            </tr>
          </tbody>
        </table>`,
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

      editor,
    }
  },
}
</script>

<style lang="scss" scoped></style>
