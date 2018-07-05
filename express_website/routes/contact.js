var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.post('/send',function(req, res, next){

  var transporter = nodemailer.createTransport({

    service : 'gmail',
    auth : {

          user : 'selbinzr@gmail.com',
          pass : 'albin@27'


    }

  });
  mailOptions = {
    from : 'selbin <selbincool@gmail.com>',
    to : 'selbinzr@gmail.com',
    subject :'website submission',
    text : 'you have a new submission with following details..Name: '+req.body.name+ 'Email: ' +req.body.email+'Message: '+req.body.message,
    html :'<p>you got a new submission with following details</p><ul><li>Name: '+req.body.name+ '</li><li>Email: ' +req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };
  transporter.sendMail(mailOptions,function(error, info){

     if(error){console.log(error);
        res.redirect('/')
    }else{
        console.log('message sent: '+info.response);
        res.redirect('/'); 

    }

  });

});
module.exports = router;
  