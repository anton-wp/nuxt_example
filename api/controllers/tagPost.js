let tagPost = require('../modules/tagPost');

exports.all = (req, res) => {
  tagPost.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(docs);
  })
}
exports.deleteAll = (req, res) => {
  tagPost.deleteAll((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(docs);
  })
}
// exports.byId = (req, res) => {
//   Test.byId(req.params.id, (err, docs) => {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500)
//     }
//     res.send(docs);
//   })
// }
// exports.createById = (req, res) => {
//   Test.createById(req.body, (err, docs) => {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500)
//     }
//     res.send(docs);
//   })
// }
// exports.updateById = (req, res) => {
//   Test.updateById(req.body, (err, docs) => {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500)
//     }
//     res.sendStatus(200);
//   })
// }
// exports.deleteById = (req, res) => {
//   Test.deleteById(req.params.id, (err, docs) => {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500)
//     }
//     res.sendStatus(200);
//   })
// }
