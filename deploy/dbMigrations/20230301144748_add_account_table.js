
exports.up = (knex) => {
    return knex.schema.dropTableIfExists('tbl_account').createTable('tbl_account', (table)=>{
        table.uuid('id').notNullable().primary().index('tbl_account_id_index')
        table.string('firstname', 50)
        table.string('lastname', 50)
        table.string('nickname', 50)
        table.string('email', 64)
        table.string('mobile', 64)
        table.string('country', 2).defaultTo('KR')
        table.string('oauth_type', 5).notNullable().index('tbl_account_oauth_type_index')
        table.string('oauth_id', 512).index('tbl_account_oauth_id_index')
        table.string('pin', 64).defaultTo('0000')
        table.integer('target_read_time').notNullable().defaultTo(3600)
        table.timestamp('pin_created_at')
        table.boolean('email_verification').defaultTo(false)
        table.timestamp('email_verification_date')
        table.boolean('age_verification').defaultTo(false)
        table.timestamp('age_verification_date')
        table.string('profile_image_url', 2048)
        table.jsonb('bg_image_urls', 2048).notNullable().defaultTo(JSON.stringify([]))
        table.jsonb('meta').notNullable().defaultTo(JSON.stringify({}))
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at')
    })
}

exports.down = (knex)=>{
    return knex.schema.dropTable('tbl_account')
}