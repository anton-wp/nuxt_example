let tag = require('../modules/tag');
let tagPost = require('../modules/tagPost');

exports.all = (req, res) => {
  tag.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(docs);
  })
}
exports.create = async (req, res) => {
  try {
    if (req.body.name) {
      let addTag = await tag.create(req.body)
      let addTagPost = await tagPost.create({ tag: addTag.ops[0]._id, post: [] })

      console.log(addTag.ops[0]._id);
      res.sendStatus(200);
    } else {
      return res.sendStatus(500)
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(500)
  }
}
exports.delete = async (req, res) => {
  try {
    await tag.delete(req.params.id)

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500)
  }
}

