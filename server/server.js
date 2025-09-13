import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your React app's origin if different
}));
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { artworkName, name, number, email, address, message } = req.body;

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'saimaqeel2@gmail.com',
        pass: '321@Admin',
      },
    });

    // Email content
    const mailOptions = {
      from: 'saimaqeel2@gmail.com',
      to: 'tayyabyassin772@gmail.com',
      subject: `Enquiry for ${artworkName}`,
      text: `
        Enquiry Details:
        Artwork: ${artworkName}
        Name: ${name}
        Number: ${number}
        Email: ${email}
        Address: ${address}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});