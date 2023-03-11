
exports.up = (knex) => {
    return knex.schema.dropTableIfExists('tbl_mybook').createTable('tbl_mybook', (table)=>{
        table.uuid('id').notNullable().primary().index('tbl_mybook_id_index')
        table.uuid('user_id').notNullable().index('tbl_mybook_user_id_index')
        table.string('title', 255).notNullable()
        table.text('content')
        table.jsonb('authors').defaultTo(JSON.stringify([]))
        table.jsonb('translators').defaultTo(JSON.stringify([]))
        table.string('publisher')
        table.string('thumbnail_url')
        table.string('isbn').notNullable()
        table.integer('current_page').defaultTo(0)
        table.integer('total_page').defaultTo(1)
        table.jsonb('images').notNullable().defaultTo(JSON.stringify([]))
        table.boolean('reading').defaultTo(false)
        table.boolean('favorite').defaultTo(false).index('tbl_mybook_favorite_index')
        table.jsonb('meta').notNullable().defaultTo(JSON.stringify({}))
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at')
    })
}

exports.down = (knex)=>{
    return knex.schema.dropTable('tbl_mybook')
}