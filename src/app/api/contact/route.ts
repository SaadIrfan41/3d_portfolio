import { mailOptions, transporter } from '@/utils/nodemailer'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function POST(request: NextApiRequest) {
  console.log(mailOptions)
  try {
    const res = await transporter.sendMail({
      ...mailOptions,
      // ...generateEmailContent(data),
      subject: 'Portfolio Contact Form Submission',
      text: 'This is a test string',
      html: '<h1>TEST TITLE</h1><p>SOME BODY TEXT</p>',
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
