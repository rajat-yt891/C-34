var ball;
var database, position;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref('ball');
    ballposition.on("value", readposition, showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }
    drawSprites();
}

function readposition(data){
    position=data.val();
    console.log(position);
    ball.x=position.x;
    ball.y=position.y;
}
function showerror(){
    console.log("error");
}
function writePosition(x,y){
    var positionref=database.ref('ball');
    positionref.set({
        'x':position.x+x, 'y':position.y+y
    })

}    
