'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TipTap = ({
  description,
  onChange,
}: {
  description: string
  onChange: (richText: string) => void
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: description,
    editorProps: {
      attributes: {
        class:
          'rounded-md border min-h-[250px] border-input disabled:cursor-not-allowed disabled: opacity-50',
      },
    },
    onUpdate({ editor }) {
      onChange(editor?.getHTML())
      console.log(editor?.getHTML())
    },
  })
  return (
    <div className='flex flex-col justify-stretch min-h-[250px]'>
      <EditorContent editor={editor} />
    </div>
  )
}

export default TipTap
