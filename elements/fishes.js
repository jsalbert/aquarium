class Fish {
    constructor(size, canvas, context){ 
        this.size = (Math.random() + 0.25) * size;
        this.context = context;
        this.canvas = canvas
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height - this.size;
        this.xChange = (Math.random() + 0.2) * 1.5;
        this.yChange = Math.random() * 0.5;
    }

    move(){
        if(this.x >= this.canvas.width || this.x <= 0){
            this.xChange *= -1
            this.flip = !this.flip;
          }

        if(this.y >= this.canvas.height - 50 - this.size_2 || this.y <= 0){
            this.yChange *= -1
          }

        this.x += this.xChange;
        this.y += this.yChange;
    }

    draw(){
        if (this.flip == true) {
            this.context.save()
            this.context.translate(this.x + this.size_1/2, this.y + this.size_2/2);
            this.context.scale(-1, 1);
            this.context.drawImage(this.imgFish, -this.size_1/2, -this.size_2/2, this.size_1, this.size_2)
            this.context.restore()
        } else {
        this.context.drawImage(this.imgFish, this.x, this.y, this.size_1, this.size_2);
        }
    }
}

class FishOrange extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+1.5) * size;
        this.size_2 = (Math.random()+0.5) * size;
        this.xChange = (Math.random() + 0.2) * 1.2;
        this.yChange = Math.random() * 0.5-0.2;
        this.imgFish = new Image();  
        this.imgFish.src = "img/fish1.png";
        this.flip = false;
    }
}

class FishBlue extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+2) * size;
        this.size_2 = (Math.random()+1.2) * size;
        this.xChange = (Math.random() + 0.2) * 1.2;
        this.yChange = Math.random() * 0.4-0.2;
        this.imgFish = new Image();  
        this.imgFish.src = "img/fish2.png";
        this.flip = false;
    }
}

class FishYellow extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+2.3) * size;
        this.size_2 = (Math.random()+1.2) * size;
        this.xChange = (Math.random() + 0.2) * 1.1;
        this.yChange = Math.random() * 0.5;
        this.imgFish = new Image();  
        this.imgFish.src = "img/yellowfish.png";
        this.flip = false;
    }
}

class Nemo extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+1.5) * size;
        this.size_2 = (Math.random()+1.2) * size;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height + 500;
        this.xChange = (Math.random() + 0.2) * 0.2;
        this.yChange = Math.random() * 0.2;
        this.imgFish = new Image();  
        this.imgFish.src = "img/clownfish.png";
        this.flip = false;
    }
}

class Fish1 extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+2.3) * size;
        this.size_2 = (Math.random()+1.4) * size;
        this.xChange = (Math.random() + 0.2) * 1.1;
        this.yChange = Math.random() * 0.5-0.3;
        this.imgFish = new Image();  
        this.imgFish.src = "img/fish5.png";
        this.flip = false;
    }
}

class Fish2 extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+2.2) * size;
        this.size_2 = (Math.random()+1.4) * size;
        this.xChange = (Math.random() + 0.2) * 1.2;
        this.yChange = Math.random() * 0.5-0.3;
        this.imgFish = new Image();  
        this.imgFish.src = "img/fish3.png";
        this.flip = false;
    }
}

class Fish3 extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+2.5) * size;
        this.size_2 = (Math.random()+1.4) * size;
        this.xChange = (Math.random() + 0.2) * 1.2;
        this.yChange = Math.random() * 0.7 - 0.5;
        this.imgFish = new Image();  
        this.imgFish.src = "img/fish4.png";
        this.flip = false;
    }
}

class Shark extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+6.0) * size;
        this.size_2 = (Math.random()+5.5) * size;
        this.xChange = (Math.random() + 0.2) * 0.7;
        this.yChange = Math.random() * 0.6 - 0.4;
        this.imgFish = new Image();  
        this.imgFish.src = "img/shark.png";
        this.flip = false;
    }
}

class Hammerhead extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+9.0) * size;
        this.size_2 = (Math.random()+7.5) * size;
        this.xChange = (Math.random() + 0.2) * 0.5;
        this.yChange = Math.random() * 0.7 - 0.4;
        this.imgFish = new Image();  
        this.imgFish.src = "img/hammerhead.png";
        this.flip = false;
    }
}

class Manta extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+7.0) * size;
        this.size_2 = (Math.random()+5.5) * size;
        this.xChange = (Math.random() + 0.2) * 0.5;
        this.yChange = Math.random() * 0.7 - 0.4;
        this.imgFish = new Image();  
        this.imgFish.src = "img/manta_ray.png";
        this.flip = false;
    }
}

class Turtle extends Fish{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+3.0) * size;
        this.size_2 = (Math.random()+2.2) * size;
        this.xChange = (Math.random() + 0.2) * 0.5;
        this.yChange = Math.random() * 0.7 - 0.4;
        this.imgFish = new Image();  
        this.imgFish.src = "img/turtle.png";
        this.flip = false;
    }
}

const small_fishes = {
                "orangefish": FishOrange, 
                "bluefish": FishBlue,
                "yellowfish": FishYellow,
                "fish1": Fish1,
                "fish2": Fish2,
                "fish3": Fish3,
                "nemo": Nemo
};

const big_fishes = {
    "hammerhead": Hammerhead,
    "shark": Shark,
    "manta": Manta,
    "turtle": Turtle
};

export{small_fishes, big_fishes}
