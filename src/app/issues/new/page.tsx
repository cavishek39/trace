'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/ui/form'
import { Input } from '@/app/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import TipTap from '@/app/components/Tiptap'

const NewIssue = () => {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'Hey title is not too long' })
      .max(100, { message: 'Hey title is too long' })
      .trim(),
    description: z
      .string()
      .min(5, { message: 'Hey description is not too long' })
      .max(100, { message: 'Hey description is too long' })
      .trim(),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      description: '',
    },
  })
  return (
    <div className='p-4'>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Issue Title' {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <TipTap description={field.name} onChange={field.onChange} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default NewIssue
