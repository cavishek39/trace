'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Toolbar from './Toolbar'

const TipTap = ({
  description,
  onChange,
}: {
  description: string
  onChange: (richText: string) => void
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class: 'text-xl font-bold',
          level: [2],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          'rounded-md border min-h-[250px] border-input disabled:cursor-not-allowed disabled: opacity-50 rounded-br-md',
      },
    },
    onUpdate({ editor }) {
      onChange(editor?.getHTML())
      console.log(editor?.getText())
    },
  })
  return (
    <div className='flex flex-col justify-stretch min-h-[250px]'>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default TipTap
