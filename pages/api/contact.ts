// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail';
import dotenv from "dotenv";

dotenv.config();
if(process.env.SENDGRID_API_KEY){
  mail.setApiKey(process.env.SENDGRID_API_KEY);
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {name, email, company, message} = req.body

  const msg = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Company: ${company}\r\n
    Message: ${message}
  `

  const data = {
    to: "jaewp94@gmail.com",
    from: "pjaew94@gmail.com",
    subject: "New Portfolio Form Message",
    text: msg,
    html: msg.replace(/\r\n/g, '<br>')
  }

  mail.send(data)

  res.status(200).json( req.body )
}
