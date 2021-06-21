import express, { request, response } from "express";

const app = express();

app.get( "/test", (request,response) => 
  {
    return response.send("olá");    
  } 
);

app.post( "/test.post", (request,response) =>
  {
    response.send("KASOPDASK");
  } 
);

app.listen( 8080, () => console.log( "Server is running" )   );