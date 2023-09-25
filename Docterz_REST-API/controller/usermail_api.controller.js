import nodemailer from 'nodemailer'

function usersendmail(email,password) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'awsranu.soni1@gmail.com',
          pass: 'xsaudyswyuebsvqp'
        }
      });
      
      var mailOptions = {
        from: 'awsranu.soni1@gmail.com',
        to: email,
        subject: 'Verification Email By Doctorz',
        
        html: "<h1>Welcome to Doctorz</h1><p>You have successfully register with our app , your login credentials are attached below</p><h2>Username : "+email+"</h2><h2>Password : "+password+"</h2><h4>you are a user then click on this link to redirect..</h4> http://localhost:3000/verifyuser/"+email
       
        
      
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
export default usersendmail