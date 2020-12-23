let db = require('../db');
let ObjID = require('mongodb').ObjectID

exports.all = (cd) => {
  db.get().collection('tagPost').find().toArray((err, docs) => {
    cd(err, docs)
  })
}
exports.deleteAll = (cd) => {
  db.get().collection('tagPost').remove({}, (err, docs) => {
    cd(err, docs)
  })
}
exports.create = async (tagPost) => {
  let res = await db.get().collection('tagPost').insert(tagPost)
  return res
}
exports.updateByIdTag = async (postId, idTag) => {
  console.log(idTag);
  let res = await db.get().collection('tagPost').update({ tag: ObjID(idTag) }, { $push: { post: postId } }, { upsert: true })
  return res
}

