let db = require('../db');
let ObjID = require('mongodb').ObjectID

exports.all = async (cd) => {
  let res = await db.get().collection('tests').find().toArray()
  return res
}
exports.byId = (id, cd) => {
  db.get().collection('tests').findOne({ _id: ObjID(id) }, (err, docs) => {
      (err, docs)
  })
}
exports.createById = async ( post) => {
  let res = await db.get().collection('tests').insert(post)
  return res
}
exports.updateById = (post, cd) => {
  post._id = ObjID(post._id)
  db.get().collection('tests').update({ _id: ObjID(post._id) }, { name: post.name, img: post.img, text: post.text, tag: post.tag }, { upsert: true }, (err, docs) => {
    cd(err, docs)
  })
}
exports.deleteById = (id, cd) => {
  db.get().collection('tests').deleteOne({ _id: ObjID(id) }, { upsert: true }, (err, docs) => {
    cd(err, docs)
  })
}
