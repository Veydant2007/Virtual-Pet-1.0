var dog,happyDog,database,foods,foodStock

function preload()
{
  dogImage = loadImage("images/dogimg.png")
  dogIImage = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(10,10,10,10)
  dog.addImage(dogImage)
  database.add(database)

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
  
}


function draw() {  

  background(46,139,87)

  if(KeyWentDown(UP_ARROW)){
    readStock(foodS)
    dog.addImage(dogIImage)
  }

  Text("foodStock,250,250")

  drawSprites();
  //add styles here

}

function writeStock(){
  database
  .ref("/")
  .update({foodStock:foodStock})
}

