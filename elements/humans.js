class ScubaDiver {
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

class ScubaMan extends ScubaDiver{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+4.0) * size;
        this.size_2 = (Math.random()+2.3) * size;
        this.xChange = (Math.random() + 0.2) * 0.6;
        this.yChange = Math.random() * 0.5-0.2;
        this.imgFish = new Image();  
        this.imgFish.src = "img/scuba_1.png";
        this.flip = false;
    }
}

class ScubaWoman extends ScubaDiver{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = (Math.random()+3.0) * size;
        this.size_2 = (Math.random()+2.0) * size;
        this.xChange = (Math.random() + 0.2) * 0.6;
        this.yChange = Math.random() * 0.5-0.2;
        this.imgFish = new Image();  
        this.imgFish.src = "img/scuba_2.png";
        this.flip = false;
    }
}

export{ScubaMan, ScubaWoman}
