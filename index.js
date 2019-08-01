const fs= require('fs');
const http= require('http');
const colors= require('colors');
const express= require('express');
const server= express();
server.get('/',function(req,res){
    res.send('<h1>Hola mundo con express');
})
server.listen(3000, ()=>{
    console.log('Server on port 3000'.cyan);
})

/*Forma uno de crear el codigo
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();
}).listen(3000);*/

//forma dos de Crear el codigo
/*Servidor a manita
const handleServer= function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Lorem ipsu no se que jaja</h1>');
    res.end();
}
//http.createServer(handleServer).listen(3000);
const server= http.createServer(handleServer);
server.listen(3000,function(){
    console.log('Server on port 3000'.green)
})*/
/* Pruebas xD
fs.writeFile('./texto.txt','lienaOne', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('Ultima linea de codigo');
*/

/*fs.readFile('./texto.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});*/
