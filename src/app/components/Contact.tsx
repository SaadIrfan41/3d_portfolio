import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import EarthModel from './EarthModel'

type FormData = {
  name: string

  email: string
  message: string
}

const sendContactForm = async (data: FormData) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })

const Contact = () => {
  const [loading, setloading] = useState(false)
  const schema: ZodType<FormData> = z.object({
    name: z
      .string()
      .min(2, 'Name must contain at least 2 character(s)')
      .max(30, 'Name must contain at most 30 character(s)'),
    message: z
      .string()
      .min(2, 'Message must contain at least 2 character(s)')
      .max(500, 'Name must contain at most 500 character(s)'),
    // lastName: z.string().min(2).max(30),
    email: z
      .string()
      .email()
      .refine((e) => {
        return e.includes('@gmail.com')
      }, 'Can only use "@gmail.com" email'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const submitData = async (data: FormData) => {
    setloading(true)

    try {
      console.log('IT WORKED', data)
      await sendContactForm(data)
      setloading(false)
    } catch (error) {
      setloading(false)

      console.log(error)
    }
  }

  return (
    <div
      id='experience'
      //   className=' px-8 md:px-16  py-10 mt-24 overflow-hidden'
      className={`xl:mt-12  flex xl:flex-row flex-col-reverse gap-10 overflow-hidden xl:max-w-7xl mx-auto max-w-md md:max-w-xl lg:max-w-4xl z-10`}
    >
      <motion.div
        // variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-[#100D25] p-8 rounded-2xl'
      >
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>
          Get in touch
        </p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Contact.
        </h3>

        <form
          //   ref={formRef}
          onSubmit={handleSubmit(submitData)}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              {...register('name')}
              placeholder="What's your good name?"
              className={`bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none  font-medium ${
                errors.name ? 'border-red-500 border-2' : 'border-none'
              }`}
            />
            {errors.name && (
              <span className='text-red-400'> {errors.name.message}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              {...register('email')}
              placeholder="What's your web address?"
              className={`bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none  font-medium ${
                errors.email ? 'border-red-500 border-2' : 'border-none'
              }`}
            />
            {errors.email && (
              <span className='text-red-400'> {errors.email.message}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              {...register('message')}
              placeholder='What you want to say?'
              className={`bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none  font-medium ${
                errors.message ? 'border-red-500 border-2' : 'border-none'
              }`}
            />
            {errors.message && (
              <span className='text-red-400'> {errors.message.message}</span>
            )}
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:cursor-no-drop'
          >
            {loading ? (
              <div role='status' className='flex items-center gap-x-2'>
                <span className=''>Sending</span>

                <svg
                  aria-hidden='true'
                  className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              </div>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        // variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthModel />
      </motion.div>
    </div>
  )
}

export default Contact
