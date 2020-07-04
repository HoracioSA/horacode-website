const connection=require('../../database/knex')
const jwt=require('jsonwebtoken')
const {compare}=require('bcrypt')

module.exports={
    async sotore(req, res){
        const {email, password}=req.body;
        const [user] = await connection.select('*').from('users').where({email})
        if (!user) {
            return res.send({message:'Could not find email'})
        }
        const Is_Valid_Password=await compare(password, user.password);
        if (!Is_Valid_Password) {
            return res.send({message:'Wrong Password'})
        }

        const token = jwt.sign({id:user.id},process.env.SECRET_TOKEN)
        return res.header('auth_token', token).send({token, user})


    }
}