let Test = require('../modules/test');
let tagPost = require('../modules/tagPost');

exports.all = async (req, res) => {
  try {
    let docs = await Test.all()
    console.log(docs);
    res.send(docs);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500)
  }
}
exports.byId = (req, res) => {
  Test.byId(req.params.id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(docs);
  })
}
exports.createById = async (req, res) => {
  try {
    let post = await Test.createById(req.body);
    for (let i = 0; i < req.body.tag.length; i++) {
      await tagPost.updateByIdTag(post.ops[0]._id, req.body.tag[i]._id);
    }
    res.send(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500)
  }
}
exports.updateById = (req, res) => {
  Test.updateById(req.body, (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.sendStatus(200);
  })
}
exports.deleteById = (req, res) => {
  Test.deleteById(req.params.id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.sendStatus(200);
  })
}
