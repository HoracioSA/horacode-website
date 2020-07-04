exports.up = function(knex) {
    return knex.schema
    .createTable('users', function(table) {
        table.string('id').primary()
        table.string('name', 255).notNullable()
        table.string('surname', 255).notNullable()
        table.string('email', 255).notNullable().unique()
        table.string('password', 255).notNullable()
        //table.string('hashPassword',255).notNullable()
        table.integer('image_id').unsigned()
        table
            .boolean('account_verified')
            .notNullable()
            .defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })

}

exports.down = function(knex) {
    return knex.schema 
    .dropTable('users')
}