const db = require('../data/database')

function find(){
  return  db.select('schemes.scheme_name','steps.instructions')
    .from('schemes')
    .innerJoin('steps','schemes.id','steps.scheme_id')
    .orderBy('schemes.id')
    .orderBy('steps.scheme_id')
    .orderBy('steps.step_number')
}

module.exports = {find}