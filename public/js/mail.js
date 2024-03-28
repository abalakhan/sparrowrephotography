
import * as FormData from 'form-data';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

mg.messages.create('sandbox-123.mailgun.org', {
	from: "Excited User <mailgun@sandbox-123.mailgun.org>",
	to: ["test@example.com"],
	subject: "Hello",
	text: "Testing some Mailgun awesomeness!",
	html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error

// const auth = {
//   auth: {
//     api_key: process.env.MAILGUN_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN
//   }
// }

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'sparrowrephotography@gmail.com',
        subject,
        text
      };
      
      transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
}

export default sendMail;