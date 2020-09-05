let Article = require('../models/Article.js');

let articleController = {
createArticle:(req,res)=>{ res.render('new',{article: new Article() })},
readMore:(req,res)=>{
  let articleId = req.params.id;
  Article.findById({_id:articleId}).then((article)=>
  {
  return res.render('readMore',{article})
});
},
deleteArticle:(req,res)=>{
  let articleId = req.params.id;
  Article.findByIdAndDelete({_id:articleId}).then(()=>{
  return  res.redirect('/homepage');
  })
},
editArticle:async(req,res)=> {

await  Article.findById({_id:req.params.id}).then((fullArticle)=>{
      return res.render('edit',{article:fullArticle});
  })},

  changeArticle:async(req,res,next)=>{
     req.article = await Article.findById({_id:req.params.id})
     next();
  },
seeMyArticle:async(req,res)=>{
  console.log(req.user._id);
  const articles =  await Article.findById({articleId:req.user._id});
    res.render('myArticles',{articles});
}


}

module.exports = articleController;
