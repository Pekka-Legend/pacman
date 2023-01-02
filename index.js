const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 28 * 18
canvas.height = 36 * 18
score = 0;
var deltaTime;
class Background {
    constructor(){
        this.position = {x: 0, y: 0}
        this.width = innerWidth;
        this.height = innerHeight;
        this.color = 'black'
    }
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class PacMan {
    constructor(){
        this.position = {x: 28 * 18 / 2 - 14, y: 684 - 72 * 3 + 14}
        this.width = 28;
        this.height = 28;
        this.color = 'yellow'
    }
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class Dot {
    constructor(x, y){
        this.position = {x: x - 3, y: y - 12}
        this.width = 6;
        this.height = 6;
        this.color = 'grey'
        this.collected = false
    }
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(){
        if (pm.position.x < this.position.x + this.width && pm.position.x + pm.width > this.position.x && pm.position.y < this.position.y + this.height && pm.position.y + pm.height > this.position.y){
            if (this.collected == false)
            {
                score += 10
            }
            this.collected = true
            
        }
    
    }
}
class Wall {
    constructor(x, y, width, height)
    {
        this.position = {x: x, y: y}
        this.width = width;
        this.height = height;
    }
    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    up(){
        if (pm.position.x < this.position.x + this.width && pm.position.x + pm.width > this.position.x && pm.position.y - 1 < this.position.y + this.height && pm.position.y + pm.height > this.position.y) return true
        else return false
    }
    down(){
        if (pm.position.x < this.position.x + this.width && pm.position.x + pm.width > this.position.x && pm.position.y < this.position.y + this.height && pm.position.y + pm.height + 1> this.position.y) return true
        else return false
    }
    left(){
        if (pm.position.x - 1 < this.position.x + this.width && pm.position.x + pm.width > this.position.x && pm.position.y < this.position.y + this.height && pm.position.y + pm.height > this.position.y) return true
        else return false
    }
    right(){
        if (pm.position.x < this.position.x + this.width && pm.position.x + pm.width + 1> this.position.x && pm.position.y < this.position.y + this.height && pm.position.y + pm.height > this.position.y) return true
        else return false
    }
}


class Ghost {
    constructor(x, y, color)
    {
        this.x = x
        this.y = y
        this.width = 28
        this.height = 28
        this.color = color
        this.direction = 0
    }
    draw()
    {
        c.fillStyle = this.color
        c.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
    update(){

        if (pm.position.x < this.x + this.width && pm.position.x + pm.width > this.x && pm.position.y < this.y + this.height && pm.position.y + pm.height > this.y){
            window.location.reload()
        }




        if (this.color == 'red')
        {
            if (this.direction == 0 && this.y < 576 - 12)
            {
                this.y += 500 * deltaTime
            }
            if (this.direction == 0 && this.y >= 576 - 12)
            {
                this.direction = 1
                
            }
            if (this.direction == 1 && this.y > 56)
            {
                this.y -= 500 * deltaTime
                
            }
            if (this.direction == 1 && this.y <= 56)
            {
                this.direction = 0
            }
        }


        if (this.color == 'pink')
        {
            if (this.direction == 0 && this.x < 448)
            {
                this.x += 500 * deltaTime
            }
            if (this.direction == 0 && this.x >= 448)
            {
                this.direction = 1
                
            }
            if (this.direction == 1 && this.x > 56)
            {
                this.x -= 500 * deltaTime
                
            }
            if (this.direction == 1 && this.x <= 56)
            {
                this.direction = 0
            }
        }


        if (this.color == 'aqua')
        {
            if (this.direction == 0 && this.y < 492)
            {
                this.y += 500 * deltaTime
            }
            if (this.direction == 0 && this.y >= 492)
            {
                this.direction = 1
                
            }
            if (this.direction == 1 && this.y > 204)
            {
                this.y -= 500 * deltaTime
                
            }
            if (this.direction == 1 && this.y <= 204)
            {
                this.direction = 0
            }
        }
        if (this.color == 'orange')
        {
            if (this.direction == 0 && this.x < 448)
            {
                this.x += 500 * deltaTime
            }
            if (this.direction == 0 && this.x >= 448)
            {
                this.direction = 1
                
            }
            if (this.direction == 1 && this.x > 56)
            {
                this.x -= 500 * deltaTime
                
            }
            if (this.direction == 1 && this.x <= 56)
            {
                this.direction = 0
            }
        }
    }
}


class Text {
    constructor(x, y, text, centered, color, size)
    {
        this.x = x
        this.y = y
        this.text = text
        this.centered = centered
        this.color = color
        this.size = size + "px Serif"
    }
    draw(){
        c.fillStyle = this.color
        c.font = this.size
        if (this.centered)
        {
            c.textAlign = 'center'
        }
        c.fillText(this.text, this.x, this.y)
    }
}



bg = new Background();
pm = new PacMan();
var  SCORE = new Text(60, 90, score, true, 'white', 90)
var dots = []
const keys = {
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    right: {
        pressed: false
    },
    down: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

for (var i = 1; i < 9; i++)
{
    for (var j = 1; j < 9; j++)
    {
        dots.push(new Dot(i * 56, j * 72))
    }
}

var walls = [new Wall(0, 0, 28 * 18, 18), new Wall(0, 648 - 18, 28 * 18, 18), new Wall(0, 0, 18, 36 * 18), new Wall(504 - 18, 0, 18, 36 * 18), new Wall(72, 62 - 14, 22, 100), new Wall(300, 158, 75, 22), new Wall(325, 530 - 14, 200, 22), new Wall(100, 530 - 14, 80, 22), new Wall(168 + 28, 300, 168 - 56, 22), new Wall(240, 207 + 36, 22, 216 - 72)];
var ghosts = [new Ghost(56, 56, 'red'), new Ghost(56, 204, 'pink'), new Ghost(336, 204, 'aqua'), new Ghost(400, 420, 'orange')]


var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);



function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;
    return dt;
}



function animate()
{
    
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    bg.draw();
    pm.draw();
    walls.forEach(wall => {
        wall.draw()
    })
    dots.forEach(dot => {
        dot.update()
        if (dot.collected == false)
        {
            dot.draw();
        }
    })
    deltaTime = tick() / 1000;
    ghosts.forEach(ghost => {
        ghost.draw()
        ghost.update()
    })
    if (keys.up.pressed)
    {
        pm.position.y -= 400 * deltaTime;
        if (pm.position.x <= 56 + 28 - pm.width / 2) pm.position.x = 56 - pm.width / 2
        else if (pm.position.x <= 112 + 28 - pm.width / 2) pm.position.x = 112 - pm.width / 2
        else if (pm.position.x <= 168 + 28 - pm.width / 2) pm.position.x = 168 - pm.width / 2
        else if (pm.position.x <= 224 + 28 - pm.width / 2) pm.position.x = 224 - pm.width / 2
        else if (pm.position.x <= 280 + 28 - pm.width / 2) pm.position.x = 280 - pm.width / 2
        else if (pm.position.x <= 336 + 28 - pm.width / 2) pm.position.x = 336 - pm.width / 2
        else if (pm.position.x <= 392 + 28 - pm.width / 2) pm.position.x = 392 - pm.width / 2
        else if (pm.position.x <= 448 + 28 - pm.width / 2) pm.position.x = 448 - pm.width / 2

        if (pm.position.y <= 72 - pm.height / 2 - 9)
        {
            keys.up.pressed = false
        }
        walls.forEach(wall => {
            if (wall.up())
            {
                keys.up.pressed = false
            }
        })


    }
    if (keys.left.pressed)
    {
        pm.position.x -= 400 * deltaTime;
        if (pm.position.y <= 72 + 36 - pm.height / 2) pm.position.y = 72 - pm.height / 2 - 9
        else if (pm.position.y <= 144 + 36 - pm.height / 2) pm.position.y = 144 - pm.height / 2 - 9
        else if (pm.position.y <= 216 + 36 - pm.height / 2) pm.position.y = 216 - pm.height / 2 - 9
        else if (pm.position.y <= 288 + 36 - pm.height / 2) pm.position.y = 288 - pm.height / 2 - 9
        else if (pm.position.y <= 360 + 36 - pm.height / 2) pm.position.y = 360 - pm.height / 2 - 9
        else if (pm.position.y <= 432 + 36 - pm.height / 2) pm.position.y = 432 - pm.height / 2 - 9
        else if (pm.position.y <= 504 + 36 - pm.height / 2) pm.position.y = 504 - pm.height / 2 - 9
        else if (pm.position.y <= 576 + 36 - pm.height / 2) pm.position.y = 576 - pm.height / 2 - 9



        if (pm.position.x <= 56 - pm.height / 2)
        {
            keys.left.pressed = false
        }
        walls.forEach(wall => {
            if (wall.left())
            {
                keys.left.pressed = false
            }
        })
        

    }
    if (keys.right.pressed)
    {
        pm.position.x += 400 * deltaTime;



        if (pm.position.y <= 72 + 36 - pm.height / 2) pm.position.y = 72 - pm.height / 2 - 9
        else if (pm.position.y <= 144 + 36 - pm.height / 2) pm.position.y = 144 - pm.height / 2 - 9
        else if (pm.position.y <= 216 + 36 - pm.height / 2) pm.position.y = 216 - pm.height / 2 - 9
        else if (pm.position.y <= 288 + 36 - pm.height / 2) pm.position.y = 288 - pm.height / 2 - 9
        else if (pm.position.y <= 360 + 36 - pm.height / 2) pm.position.y = 360 - pm.height / 2 - 9
        else if (pm.position.y <= 432 + 36 - pm.height / 2) pm.position.y = 432 - pm.height / 2 - 9
        else if (pm.position.y <= 504 + 36 - pm.height / 2) pm.position.y = 504 - pm.height / 2 - 9
        else if (pm.position.y <= 576 + 36 - pm.height / 2) pm.position.y = 576 - pm.height / 2 - 9
        if (pm.position.x >= 448 - pm.height / 2)
        {
            keys.right.pressed = false
        }
        walls.forEach(wall => {
            if (wall.right())
            {
                keys.right.pressed = false
            }
        })
    }
    if (keys.down.pressed)
    {
        pm.position.y += 400 * deltaTime;


        if (pm.position.x <= 56 + 28 - pm.width / 2) pm.position.x = 56 - pm.width / 2
        else if (pm.position.x <= 112 + 28 - pm.width / 2) pm.position.x = 112 - pm.width / 2
        else if (pm.position.x <= 168 + 28 - pm.width / 2) pm.position.x = 168 - pm.width / 2
        else if (pm.position.x <= 224 + 28 - pm.width / 2) pm.position.x = 224 - pm.width / 2
        else if (pm.position.x <= 280 + 28 - pm.width / 2) pm.position.x = 280 - pm.width / 2
        else if (pm.position.x <= 336 + 28 - pm.width / 2) pm.position.x = 336 - pm.width / 2
        else if (pm.position.x <= 392 + 28 - pm.width / 2) pm.position.x = 392 - pm.width / 2
        else if (pm.position.x <= 448 + 28 - pm.width / 2) pm.position.x = 448 - pm.width / 2

        if (pm.position.y >= 576 - pm.height / 2 - 9)
        {
            keys.down.pressed = false
        }
        walls.forEach(wall => {
            if (wall.down())
            {
                keys.down.pressed = false
            }
        })
    }
    SCORE.text = score;
    SCORE.draw()
    if (score == 640)
    {
        win = new Text(250, 300, 'You Win!', true, 'white', 90)
        redo = new Text(250, 350, 'Press Space to Play Again', true, 'white', 30)
        win.draw()
        redo.draw()
    }
    if (keys.space.pressed)
    {
        window.location.reload()
    }

}
animate()


addEventListener('keydown', ({keyCode}) => {
    switch(keyCode) {
        case 37:
        
            keys.left.pressed = true
            keys.right.pressed = false
            keys.up.pressed = false
            keys.down.pressed = false
            break;
        case 38:
            keys.up.pressed = true
            keys.left.pressed = false
            keys.right.pressed = false
            keys.down.pressed = false
            break;
        case 39:
            keys.right.pressed = true
            keys.down.pressed = false
            keys.left.pressed = false
            keys.up.pressed = false
            break;
        case 40:
            keys.down.pressed = true
            keys.left.pressed = false
            keys.right.pressed = false
            keys.up.pressed = false
            break;
        case 32:
            keys.space.pressed = true;
            break;
    }
})
addEventListener('keyup', ({keyCode})=> {
    switch(keyCode){
        case 32:
            keys.space.pressed = false;
            break;
    }
})
