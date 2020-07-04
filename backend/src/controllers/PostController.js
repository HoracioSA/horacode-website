const connection =require('../../database/knex');

module.exports={
    async index(request, response){
        const posts =await connection('posts').select('*');
        return response.json(posts);
    },
    async create(request,response){
        const {title, description }=request.body;
        //const name = request.headers.authorization;
    const [id]= await connection('posts').insert({
            title,
            description,
           // name
        })
         return response.json({id})
    },
    async delete(request, response){
        const {id} =request.params;
        const {name} = request.headers.authorization;
        const posts = await connection('posts')
        .where('id', id)
        .select('name')
        .first()
        if (posts.name !== name) {
            return response.status(401).json({
                message:'Operation is not permited'
            });
        }
        await connection('posts').where('id', id).delete()
        return response.status(204).send()
    }
}