
var express= require('express');
var router = express.Router();
var mongojs = require('mongojs');  
var db= mongojs('mongodb://angular:angular@ds113936.mlab.com:13936/angularcrud',['angularcrud'])
//var db=process.env.DB
//var db= mongojs(process.env.DB,['angularcrud'])

//-------get all data of the collection
router.get('/', function(req, res, next)
{       //res.send('/server/routes/api.js- api page is working');
        //console.log('req.roue.path=',req.route.path);  //visible on dos window
    db.angularcrud.find(function(err,angularcrud)
        {   if(err){   res.send(err); }
            else   {  res.json(angularcrud);  }
        });
});
//---------------get data baed on id field
router.get('/:id', function(req, res, next)
                {   db.angularcrud.findOne(
                                        {   _id:mongojs.ObjectId(req.params.id)    },
                                        function(err, angularcrud)
                                        {   if(err){ res.send(err); }
                                            else{  res.json(angularcrud);  }
                                        }
                                    );
                }
          );
//-------------save data in collection
router.post('/', function(req, res, next)
{   var todo = req.body;
    if(!todo.text || !(todo.isCompleted + ''))
    {   res.status(404);
        res.json({  "error":"invalid Data"  });
    }
  else{   db.angularcrud.save(todo, function(err, result)
              { if(err){ res.send(err); }else{  res.json(result);  }
              });
       }
});

//---update data in collection
router.put('/:id', function(req, res, next)
{   var todo = req.body;
    var updObj = {};
    if(todo.isCompleted){   updObj.isCompleted = todo.isCompleted    }
    if(todo.text){      updObj.text = todo.text;    }
    if(!updObj){     res.status(404);
                     res.json({        "error":"invalid Data"      });
              }
    else{  db.angularcrud.update({  _id: mongojs.ObjectId(req.params.id) }, 
                             updObj,{},function(err, result)
                               {  if(err){   res.send(err); }else{  res.json(result);  }
                               });
        }
});
  // Delete 
router.delete('/:id', function(req, res, next)
{   db.angularcrud.remove({   _id: mongojs.ObjectId(req.params.id)  }, '', 
                     function(err, result)
                        {  if(err){  res.send(err); } else { res.json(result); }
                        }
                    );
});
  

module.exports = router;