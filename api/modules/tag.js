let db = require('../db');
let ObjID = require('mongodb').ObjectID

exports.all = (cd) => {
  db.get().collection('tag').find().toArray((err, docs) => {
    cd(err, docs)
  })
}
exports.create = async (post) => {
  let res = await db.get().collection('tag').insert(post)
  return res
}
exports.delete = async (id) => {
  let res = await db.get().collection('tag').deleteOne({ _id: ObjID(id) }, { upsert: true })
  return res
}
