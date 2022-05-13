let AlturaDaTela = 600;
let ComprimentoDaTela = 800;

let xBolinha = ComprimentoDaTela / 2;
let yBolinha = AlturaDaTela / 2;
let dBolinha = 22;
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raio = dBolinha / 2;
let alturaraquete = 175;
let larguradaraquete = 13;
let xraquete = 10;
let xraquete2 = ComprimentoDaTela - 10;
let yraquete = AlturaDaTela / 2;
let yraquete2 = AlturaDaTela / 2;
let colidiu = false;
let meuspontos = 0;
let pontosdooponente = 0;




function setup() {
  createCanvas(ComprimentoDaTela, AlturaDaTela);
}
function draw() {
  background(0);
  hit = collideRectCircle(xraquete, yraquete, larguradaraquete, alturaraquete, xBolinha, yBolinha, dBolinha);

  mostrabolinha();
  velocidadebolinha();
  colisaoBolinha();
  raquete(xraquete, yraquete);
  raquete2(xraquete2, yraquete2);
  movimentodaraquete1();
  movimentodaraquete2();
  verificaColisaoRaquete(xraquete, yraquete);  
  verificaColisaoRaquete(xraquete2, yraquete2);
  criapontos();
  MarcaPontos();
} 
  
function mostrabolinha(){
  circle(xBolinha, yBolinha, dBolinha);
}
function velocidadebolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}
function colisaoBolinha(){ 
if (xBolinha + raio > ComprimentoDaTela || xBolinha - raio < 0){ velocidadexBolinha *= -1} 
if (yBolinha + raio > AlturaDaTela || yBolinha - raio < 0) {
  velocidadeyBolinha *= -1
  }
}
function raquete(){
  rect(xraquete, yraquete, larguradaraquete, alturaraquete);
  
}

function raquete2(){ 
  rect(xraquete2, yBolinha - alturaraquete / 2, larguradaraquete, alturaraquete);

}
function movimentodaraquete1(){
  if (keyIsDown(UP_ARROW)) {
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
  }
} 
  function movimentodaraquete2(){
  if (keyIsDown(87)) {
    yraquete2 -= 10;
  }
  if (keyIsDown(83)) {
    yraquete2 += 10;
  }
  }
 
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle (x, y, larguradaraquete, alturaraquete, xBolinha, yBolinha, dBolinha);
 
  if (colidiu){
    velocidadexBolinha *= -1;
   }
}
   
   function criapontos(){
     fill(255);
     text(meuspontos, 200, 30);
     text(pontosdooponente, 600, 30);
     
    }
   
   function MarcaPontos(){
     if (xBolinha > ComprimentoDaTela - 10){
       meuspontos += 1;
          
     }
     if (xBolinha < ComprimentoDaTela - 770){
       pontosdooponente += 1;
          
     }
     
   }
    
    
     
   
   
   


  
  
  

  
  
  









