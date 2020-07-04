
exports.up = function(knex) {
    return knex.schema
    .createTable('images', function(table){
        table.increments().primary()
        table.integer('image_id').unsigned()
        table.string('path',255),
        table.integer('size').unsigned()
        table.string('original_name',100)
        table.string('extension', 10)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
    .createTable('posts', function(table) {
        table.increments()
        table.string('title', 255).notNullable()
        table.string('description', 255).notNullable()
        table.integer('image_id')
        table.string('user_id').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table
            .foreign('user_id')
            .references('id')
            .inTable('users')
        table
            .foreign('image_id')
            .references('id')
            .inTable('images')
    })
    .createTable('comments', function(table) {
        table.increments().primary()
        table.string('comment', 255).notNullable()
        table.string('user_id', 255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
  
        table
        .foreign('user_id')
        .references('id')
        .inTable('users')
    })
    

    .createTable('tokens', function(table){
        table.increments().primary()
        table.string('user_id').unsigned()
        table.string('token', 255).notNullable().unique().index()
        table.string('type', 80).notNullable()
        table.boolean('is_revoked').defaultTo(false)
        table.timestamps()
        table
        .foreign('user_id')
        .references('id')
        .inTable('users')
    })
    .createTable('password_resets', function(table){
        table.increments().primary()
        table.string('email', 254).notNullable()
        table.string('token').notNullable().unique()
        table.dateTime('expirs_at')
        table.timestamps()

        table.foreign('email')
        .references('email')
        .inTable('users')
        .onDelete('cascade')
    });
}

exports.down = function(knex) {
    return knex.schema
    .dropTable('posts')
    .dropTable('comments')
    .dropTable('images')
    .dropTable('password_resets')
    .dropTable('tokens')
};

