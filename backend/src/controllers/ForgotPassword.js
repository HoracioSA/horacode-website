const connection=require('../../database/knex')

const Mailgen = require('mailgen')
const jwt=require('jsonwebtoken')
const {transport,mailGenerator} = require('../utils/email')

const express = require('express')
module.exports={
    
    async store(req, res, next){
        
        const {email}=req.body;
       try {
           const [user]=await connection.select('*').from('users').where({email})
           if (!user) {
               return res.send({message:'Could not find the email'})
           }
           const token = jwt.sign({id: user.id}, process.env.RESET_PW_TOKEN, {expiresIn:'1m'});
           //console.log(token)
           const emailData = {
            body: {
                name: user.name,
                intro: 'You have received this email because a password reset request for your account was received.',
                action: {
                    instructions: 'Click the button below to reset your password:',
                    button: {
                        color: '#6C63FF',
                        text: 'Reset your password',
                        link: `${process.env.CLIENT_URL}/reset?token=${token}`
                    }
                },
                outro: 'If you did not request a password reset, no further action is required on your part.'
            }
        };
        const emailBody = mailGenerator.generate(emailData);
        //require('fs').writeFileSync('forgot_pw.html', emailBody, 'utf8');
           transport.sendMail({
               from:'justcode@gmail.com',
               to:email,
               subject:'Rest Password JustCode',
               html:emailBody

           }, function(error){
               if (error) return console.log(error);
                   c//onsole.log('Message sent successfully.')
           }
            )
            next()
    
       } catch (error) {
         res.status(400).send({error:'Error on forgot password, try again'})  
       }
        
    }
    
}