let express = require('express')
let router = express.Router();
let {createArticle,readMore,deleteArticle,editArticle,changeArticle,seeMyArticle} = require('../controllers/articleController');
let Article = require('../models/Article.js');

function saveArticleAndRedirect(path)
{
  return async(req,res)=>{
let article = req.article;
article.title = req.body.title;
article.description = req.body.description;
article.markdown = req.body.markdown;

let savedArticle =  await article.save();
if(savedArticle)
{
  console.log('Article has been saved')
}
res.redirect(`/${path}`);
}
}

router.post('/',(req,res,next)=>{
 req.article =  new Article();
  next();
},saveArticleAndRedirect('homepage'));

router.get('/readMore/:id',readMore);
router.get('/new',createArticle);
router.delete('/deleteArticle/:id',deleteArticle)
router.get('/editArticle/:id',editArticle);
router.put('/changeArticle/:id',changeArticle,saveArticleAndRedirect('homepage'));
router.get('/myArticle',seeMyArticle);




module.exports = router;
