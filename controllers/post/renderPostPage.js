const PostModel = require("../../models/PostModel");
const joinUser = require("../../stages/joinUser");

// ako stavim null, vraca sve propertije u find()
const renderPostPage = async(req, res, next) => {

    let page = req.query.page ? parseInt(req.query.page) : 1; // ako nije poslat, na prvoj je stranici
    let limit = req.query.limit ? parseInt(req.query.limit) : 3; // broj elem iz kolekcije
    try 
    {
        // upit i project, odredjujem podatke koji ce mi stici iz baze (selekcija podataka)i options
        // let posts = await PostModel.find({},{title:1, tags:1, body:1, _id:0}, {limit:limit, skip:(page-1)*limit});
        // res.send(posts);

        //aggregate: pipeline sastoji se id stages, sa njim radimo manip sa docum
        // svaki stage je object
        // svaki stage pocinje sa znakom $
        // kazemo sta da vrati{ $project {title:1} } vraca title +id
        // filtrira: {$match:{isPublic:true}} vraca samo one cija je vr true
        // bitan je redosled nad stages, svaka operacija menja array
        // u bazi ne menjamo

        let posts = await PostModel.aggregate(
            [
                {$skip:(page-1) * limit},
                {$limit: limit}, ...joinUser
               
            ]
        );
        res.send(posts);


    } catch (error) {
        next(error);
    }
    //res.render("postsPage", {user: req.session.user. posts}); // controll(user) -> izmedju parc: top(user)->nav user 
} ;

module.exports =renderPostPage ;