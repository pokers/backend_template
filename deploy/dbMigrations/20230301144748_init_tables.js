
exports.up = (knex) => {
    return knex.schema.createTable('tbl_account', (table)=>{
        table.uuid('id').notNullable().primary()
        table.string('firstname', 50)
        table.string('lastname', 50)
        table.string('email', 64)
        table.string('mobile', 64)
        table.string('country', 2)
        table.string('oauth_type', 5).notNullable().index('user_oauth_type_index')
        table.string('oauth_id', 512)
        table.string('pin', 64).defaultTo('0000')
        table.timestamp('pin_created_at')
        table.boolean('email_verification').defaultTo(false)
        table.timestamp('email_verification_date')
        table.boolean('age_verification').defaultTo(false)
        table.timestamp('age_verification_date')
        table.jsonb('meta')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at')
    })
}

exports.down = (knex)=>{
    return knex.schema.dropTable('tbl_account')
}