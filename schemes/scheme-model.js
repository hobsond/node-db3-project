const db = require('../data/database')

function find(){
  return  db.select('schemes.scheme_name','steps.instructions')
    .from('schemes')
    .leftOuterJoin('steps','schemes.id','=','steps.scheme_id')
    .orderBy('schemes.id')
}

function findById(id){
    return db('schemes')

            .where({id:id})
}

function findSteps(id){
  return  db('steps')
    .where({scheme_id:id})

}
function add(data){
  return  db('schemes')
    .insert(data)
}

function update (data,id){
    db('schemes')
    .where({id:id})
    .update(data)
}

function remove(id){
    db('schemes')
    .where({id:id})
    .delete()
}
module.exports = {find,findById,findSteps,add,update,remove}