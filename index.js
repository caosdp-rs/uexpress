const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const connection = require('./database/database');
//const PerguntaModel = require("./database/Pergunta");
//database
/*connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })*/
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",function(req,res){
    //PerguntaModel.findAll().then(perguntas => {
    //    console.log(perguntas);
    //});
    res.render("index");
});
app.get("/perguntar",(req,res)=> {
    res.render("perguntar");
})
app.post("/salvarpergunta", (req,res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
   /* PerguntaModel.create({
        titulo:titulo,
        descricao:descricao
    }).then(()=>{
        res.redirect("/");
    });*/
    res.send("formulario recebido -" + titulo + "-" + descricao);
})
app.listen(3000, function(erro){
    if(erro){
        console.log("erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})