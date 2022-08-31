
var JohnLennon, JohnLennonImg, JohnLennonImg1, JohnLennonImg2;
var Guitar, GuitarImg;
var Disco, DiscoImg;
var cenário;

var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13, parede14, parede15, parede16, parede17, parede18, parede19, parede20, parede21, parede22, parede23, parede24; 

var INICIO = 0;
var JOGAR = 1;
var FIM = 2;
var estado = INICIO;

var telaFinal, telaFinalImg;
var começo, começoImg;

function preload(){
  cenário = loadImage('imagens/background.png');

  JohnLennonImg = loadAnimation('imagens/JohnLennon - parado.png');
  JohnLennonImg1 = loadAnimation('imagens/JohnLennon - direita1.png', 'imagens/JohnLennon - direita2.png', 'imagens/JohnLennon - direita3.png', 'imagens/JohnLennon - direita4.png');
  JohnLennonImg2 = loadAnimation('imagens/JohnLennon - esquerda1.png', 'imagens/JohnLennon - esquerda2.png', 'imagens/JohnLennon - esquerda3.png', 'imagens/JohnLennon - esquerda4.png');

  GuitarImg = loadImage('imagens/Guitarra - JohnLennon.png');
 
  DiscoImg = loadImage('imagens/Please Please me disc.png');

  telaFinalImg = loadImage('imagens/tela final.png');

  começoImg = loadImage('imagens/começo.png');
}

function setup() {
  createCanvas(800,400);
  //fase1:
  JohnLennon = createSprite(50, 70);
  JohnLennon.addAnimation('JohnLennon parado', JohnLennonImg);
  JohnLennon.addAnimation('JohnLennon andando para direita', JohnLennonImg1);
  JohnLennon.addAnimation('JohnLennon andando para esquerda', JohnLennonImg2);
  JohnLennon.scale = 0.08;

  Guitar = createSprite(750, 320);
  Guitar.addImage('Guitarra do JohnLennon', GuitarImg);
  Guitar.scale = 0.08;

  //paredes
  parede1 = createSprite(3, 150, 10, 250);
  parede1.visible = false;

  parede2 = createSprite(48, 22, 80, 10);
  parede2.visible = false;

  parede3 = createSprite(90, 84, 10, 120);
  parede3.visible = false;

  parede4 = createSprite(180, 140, 180, 10);
  parede4.visible = false;

  parede5 = createSprite(42, 250, 80, 10);
  parede5.visible = false;

  parede6 = createSprite(78, 300, 10, 100);
  parede6.visible = false;

  parede7 = createSprite(115, 344, 70, 10);
  parede7.visible = false;

  parede8 = createSprite(153, 300, 10, 100);
  parede8.visible = false;

  parede9 = createSprite(303, 250, 310, 10);
  parede9.visible = false;
  
  parede10 = createSprite(267, 100, 10, 90);
  parede10.visible = false;

  parede11 = createSprite(300, 55, 70, 10);
  parede11.visible = false;

  parede12 = createSprite(340, 96, 10, 90);
  parede12.visible = false;

  parede13 = createSprite(490, 140, 305, 10);
  parede13.visible = false;

  parede14 = createSprite(453, 298, 10, 100);
  parede14.visible = false;

  parede15 = createSprite(640, 100, 10, 90);
  parede15.visible = false;

  parede16 = createSprite(495, 345, 70, 10);
  parede16.visible = false;

  parede17 = createSprite(529, 298, 10, 100);
  parede17.visible = false;

  parede18 = createSprite(678, 55, 70, 10);
  parede18.visible = false;

  parede19 = createSprite(716, 98, 10, 90);
  parede19.visible = false;

  parede20 = createSprite(615, 250, 180, 10);
  parede20.visible = false;

  parede21 = createSprite(703, 312, 10, 130);
  parede21.visible = false;

  parede22 = createSprite(750, 375, 90, 10);
  parede22.visible = false;

  parede23 = createSprite(791, 260, 10, 230);
  parede23.visible = false;

  parede24 = createSprite(758, 140, 90, 10);
  parede24.visible = false;

  Disco = createSprite(50, 200);
  Disco.addImage('Disco', DiscoImg);
  Disco.scale = 0.08;  

  telaFinal = createSprite(400, 200);
  telaFinal.addImage('telafinal', telaFinalImg);
  telaFinal.scale = 0.47;
  telaFinal.visible = false;

  começo = createSprite(175, 80);
  começo.addImage('começo', começoImg);
  começo.scale = 0.1;
}

function draw() {
  background(cenário); 

  if(estado === INICIO){
    JohnLennon.x = 50;
    JohnLennon.y = 70;
    JohnLennon.changeAnimation('JohnLennon parado');
    Disco.x = 50;
    começo.visible = true;

  }

  if(estado === INICIO && keyDown('space')){
    estado = JOGAR;
    Disco.velocityX = 20;
    começo.visible = false;
  }

  if(estado === JOGAR){
    if(keyDown('w')){
      JohnLennon.y = JohnLennon.y - 6;
      JohnLennon.changeAnimation('JohnLennon andando para direita');
    }
    if(keyDown('s')){
      JohnLennon.y = JohnLennon.y + 6;
      JohnLennon.changeAnimation('JohnLennon andando para esquerda');
    }
    if(keyDown('a')){
      JohnLennon.x = JohnLennon.x - 6;
      JohnLennon.changeAnimation('JohnLennon andando para esquerda');
    }
    if(keyDown('d')){
      JohnLennon.x = JohnLennon.x + 6;
      JohnLennon.changeAnimation('JohnLennon andando para direita');
    }
  }

  if(Disco.isTouching(parede23)){
    Disco.velocityX = - 15;
  }

  if(Disco.isTouching(parede1)){
    Disco.velocityX = 15;
  }

  if(JohnLennon.isTouching(Disco)){
    estado = INICIO;
  }

  if(JohnLennon.isTouching(Guitar)){
    estado = FIM;
  }

  if(estado === FIM){

    if(keyDown('w')){
      JohnLennon.y = JohnLennon.y - 0;
      JohnLennon.changeAnimation('JohnLennon andando para direita');
    }
    if(keyDown('s')){
      JohnLennon.y = JohnLennon.y + 0;
      JohnLennon.changeAnimation('JohnLennon andando para esquerda');
    }
    if(keyDown('a')){
      JohnLennon.x = JohnLennon.x - 0;
      JohnLennon.changeAnimation('JohnLennon andando para esquerda');
    }
    if(keyDown('d')){
      JohnLennon.x = JohnLennon.x + 0;
      JohnLennon.changeAnimation('JohnLennon andando para direita');
    }

    Disco.velocity = 0;

    telaFinal.visible = true;

  }

  if(estado === FIM && keyDown('space')){
    estado = INICIO;
    telaFinal.visible = false;
  }

  JohnLennon.collide(parede1);
  JohnLennon.collide(parede2);
  JohnLennon.collide(parede3);
  JohnLennon.collide(parede4);
  JohnLennon.collide(parede5);
  JohnLennon.collide(parede6);
  JohnLennon.collide(parede7);
  JohnLennon.collide(parede8);
  JohnLennon.collide(parede9);
  JohnLennon.collide(parede10);
  JohnLennon.collide(parede11);
  JohnLennon.collide(parede12);
  JohnLennon.collide(parede13);
  JohnLennon.collide(parede14);
  JohnLennon.collide(parede15);
  JohnLennon.collide(parede16);
  JohnLennon.collide(parede17);
  JohnLennon.collide(parede18);
  JohnLennon.collide(parede19);
  JohnLennon.collide(parede20);
  JohnLennon.collide(parede21);
  JohnLennon.collide(parede22);
  JohnLennon.collide(parede23);
  JohnLennon.collide(parede24);

  drawSprites();
}

