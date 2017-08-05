var db = require("../models");
var bucket = require("../config/storage.js");
var Multer = require("multer");
var multer =  Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024 //No larger than 5 mb
  }
});


module.exports = function(app) {
  app.get("/api/shop", function(req, res) {
    db.Shop.findAll({
      include: [db.Item]
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.get("/api/shop/:id", function(req, res) {
    db.Shop.findOne({
      include: [db.Item],
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.post("/api/shop", function(req, res) {
    db.Shop.create(req.body).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.delete("/api/shop/:id", function(req, res) {
    db.Shop.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });


app.post("/uploadimg", function(req, res, next){

  if (!req.file) {
    return next();
  }

  const gcsname = Date.now() + req.file.originalname;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    next();
  });

  stream.end(req.file.buffer);
}
)

};
