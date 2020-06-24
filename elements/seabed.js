class SeaBed{
    constructor(size, canvas, context){
        this.size = size;
        this.context = context;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height - (100 * Math.random() + 50);
    }

    draw(){
        this.context.drawImage(this.img, this.x, this.y, this.size_1, this.size_2);
    }
}

class Coral1 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 50;
        this.size_2 = Math.random() * size + 30;
        this.img = new Image();  
        this.img.src = "img/coral1.png";
    }
}

class Coral2 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 50;
        this.size_2 = Math.random() * size + 30;
        this.img = new Image();  
        this.img.src = "img/coral2.png";
    }
}

class Coral3 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 30;
        this.size_2 = Math.random() * size + 30;
        this.img = new Image();  
        this.img.src = "img/coral3.png";
    }
}

class Coral4 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 50;
        this.size_2 = Math.random() * size + 20;
        this.img = new Image();  
        this.img.src = "img/coral4.png";
    }
}

class Coral5 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 50;
        this.size_2 = Math.random() * size + 40;
        this.img = new Image();  
        this.img.src = "img/coral5.png";
    }
}

class Alga1 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 15;
        this.size_2 = Math.random() * size + 35;
        this.img = new Image();  
        this.img.src = "img/alga1.png";
    }
}

class Alga2 extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 20;
        this.size_2 = Math.random() * size + 30;
        this.img = new Image();  
        this.img.src = "img/alga2.png";
    }
}

class Anemona extends SeaBed{
    constructor(size, canvas, context){
        super(size, canvas, context);
        this.size_1 = Math.random() * size + 50;
        this.size_2 = Math.random() * size + 40;
        this.img = new Image();  
        this.img.src = "img/anemona.png";
    }
}

export {Coral1, Coral2, Coral3, Coral4, Coral5, Alga1, Alga2, Anemona}