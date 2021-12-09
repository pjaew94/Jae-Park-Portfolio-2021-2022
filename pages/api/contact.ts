// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail';
import dotenv from "dotenv";
import NextCors from 'nextjs-cors';


dotenv.config();
if(process.env.SENDGRID_API_KEY){
  mail.setApiKey(process.env.SENDGRID_API_KEY);
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


  const {name, email, company, message} = req.body

  const msg = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Company: ${company}\r\n
    Message: ${message}
  `

  const data = {
    to: "jaewp94@gmail.com",
    from: "hello@jaepark.dev",
    subject: "New Portfolio Form Message",
    text: msg,
    html: msg.replace(/\r\n/g, '<br>')
  }

  try {
    await mail.send(data)

    res.status(200).json({success:true} )
  } catch (err) {
    res.status(404).json({success:false})
  }

}
