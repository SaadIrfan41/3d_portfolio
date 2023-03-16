import { mailOptions, transporter } from '@/utils/nodemailer'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  try {
    const res = await transporter.sendMail({
      ...mailOptions,
      // ...generateEmailContent(data),
      subject: 'Portfolio Contact Form Submission',
      text: 'This is a test string',
      html: `<h1>Name:${name}</h1><br/><h2>Email:${email}</h2><p>Message:${message}</p>`,
    })
    console.log(res)
    return NextResponse.json({ success: true }, { status: 200 })

    //   return new Response.status(200).json({ success: true })
  } catch (err: any) {
    console.log(err)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
  //   return new Response('Hello, Next.js!')
}
