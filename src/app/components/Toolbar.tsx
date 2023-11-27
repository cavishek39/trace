'use client'

import { Toggle } from '@/components/ui/toggle'
import type { Editor } from '@tiptap/react'
import {
  Heading2,
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
} from 'lucide-react'

type Props = {
  editor: Editor | null
}
const Toolbar = ({ editor }: Props) => {
  if (!editor) return null

  return (
    <div className='border border-input bg-transparent rounded-md mb-2 flex align-middle justify-items-center'>
      <Toggle
        size='sm'
        pressed={editor?.isActive('heading')}
        className='m-1'
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }>
        <Heading2 className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        className='m-1'
        pressed={editor?.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}>
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        className='m-1'
        pressed={editor?.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}>
        <Strikethrough className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        className='m-1'
        pressed={editor?.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
        <List className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        className='m-1'
        pressed={editor?.isActive('orderedList')}
        onPressedChange={() =>
          editor.chain().focus().toggleOrderedList().run()
        }>
        <ListOrdered className='h-4 w-4' />
      </Toggle>
    </div>
  )
}

export default Toolbar
