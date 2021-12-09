// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail';
import dotenv from "dotenv";
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware';

dotenv.config();
if(process.env.SENDGRID_API_KEY){
  mail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await cors(req, res)

  const {name, email, company, message} = req.body

  const msg = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Company: ${company}\r\n
    Message: ${message}
  `

  const data = {
    to: email,
    from: "Jae@jaepark.dev",
    subject: "New Portfolio Form Message",
    text: msg,
    html: msg.replace(/\r\n/g, '<br>')
  }

  await mail.send(data)

  res.status(200).json( req.body )
}
