
exports.up = (knex) => {
    return knex.schema.dropTableIfExists('tbl_myhistory').createTable('tbl_myhistory', (table)=>{
        table.uuid('id').notNullable().primary().index('tbl_myhistory_id_index')
        table.uuid('user_id').notNullable().index('tbl_myhistory_user_id_index')
        table.uuid('mybook_id').notNullable().index('tbl_myhistory_mybook_id_index')
        table.integer('reading_time').notNullable().defaultTo(0)
        table.timestamp('created_at').defaultTo(knex.fn.now()).index('tbl_myhistory_created_at_index')
        table.timestamp('updated_at').defaultTo(knex.fn.now()).index('tbl_myhistory_updated_at_index')
        table.timestamp('deleted_at')
    })
}

exports.down = (knex)=>{
    return knex.schema.dropTable('tbl_myhistory')
}