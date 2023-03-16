import React from 'react'
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

const Contact = () => {
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
    // age: z.number().min(18).max(70),
    // password: z.string().min(5).max(20),
    // confirmPassword: z.string().min(5).max(20),
  })
  //   .refine((data) => data.password === data.confirmPassword, {
  //     message: 'Passwords do not match',
  //     path: ['confirmPassword'],
  //   })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const submitData = (data: FormData) => {
    console.log('IT WORKED', data)
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
            className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {/* {loading ? 'Sending...' : 'Send'} */}Send
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
