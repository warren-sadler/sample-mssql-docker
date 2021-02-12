const mssql = require('mssql')

async function main() {
    await mssql.connect('mssql://sa:Really!100@localhost')
    const result = await mssql.query`select 1`
    console.dir(result)
}

main().catch(console.error)