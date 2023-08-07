const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"adgaur027@gmail.com",
        pass:"xfzmsmtrjvgbuhoc"
    }
});

const mailOptions = {
    from:"adgaur027@gmail.com",
    to:"adkumar7112@gmail.com",
    subject:"Demo 2",
    text:"Hello world its the second  message hope you are doing well  "
};

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("Email send : " + info.response);
    }
});

