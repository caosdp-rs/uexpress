const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
    var nome = "Victor";
    var linguagem="php";
    res.render("index",{
        nome:nome,
        linguagem:linguagem,
        empresa:"Guia do Programador",
        inscritos: 8000
    });
});

app.listen(3000, function(erro){
    if(erro){
        console.log("erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})