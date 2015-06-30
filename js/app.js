var ROW1 = 210;
var ROW2 = 140;
var ROW3 = 60;
var rows = new Array(ROW1, ROW2, ROW3);

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 5; 
    this.y = 60;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += 50 * dt;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.strokeRect(this.x,this.y,101,171);
}

// Now write your own player class
var Player = function() {

    this.x = 202;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
}

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt){


}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.strokeRect(this.x,this.y,101,171);
}

Player.prototype.handleInput = function(e) {

    var up    = true;
    var left  = true;
    var right = true;
    var down  = false;

    if ( this.x - 40 < 0 )
    {
        left = false;
    }
    if (this.y - 40 < 0)
    {
        up = false;
    }
    if (this.x + 40 > 440)
    {
        right = false;
    }
    if (this.y + 40 > 606)
    {
        down = false;
    }

    if(e == 'left' && left){
        this.x -= 40;
    }else if (e == 'up' && up){
        this.y -= 40;
    }else if (e == 'right' && right){
        this.x += 40;
    }else if (e == 'down' && down){
        //do something
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var sizeofArr = 256;
var allEnemies = [] ;
var enemy;
var i = 0;
while (i < sizeofArr)
{
    //generate a randow number between 0 and 2 access y coordinate
    var ind = Math.floor(Math.random() * 3);
    var yCoord = rows[ind];

    //generate the x coordinat
    enemy = new Enemy();
    enemy.y = yCoord;
    allEnemies.push(enemy);
    i += 1;

}

console.log ("number of enemies " + allEnemies.length);

var xcoord = -100;
var xcoord0 = -100;
var xcoord1 = -100;
var xcoord2 = -100;
var xcoord3 = -100;
for (index = 0; index < sizeofArr; index++)
{
    var rand = ((Math.floor((Math.random() * 40) + 10) % 4) + 1) * 100;
    xcoord =- rand;

    if ((index % 4) == 0)
    {
        xcoord0 += xcoord
        xcoord = xcoord0
    }

    if ((index % 4) == 1)
    {
        xcoord1 += xcoord
        xcoord = xcoord1
    }

    if ((index % 4) == 2)
    {
        xcoord2 += xcoord
        xcoord = xcoord2
    }

    if ((index % 4) == 3)
    {
        xcoord3 += xcoord
        xcoord = xcoord3
    }

    allEnemies[index].x = xcoord;

}


// Place the player object in a variable called player
var player = new Player();
var activeEnemies = [];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
