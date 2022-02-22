class Circle{
    constructor(radius,color){
    this.radius=1.0;
    this.color="red";
    }
    getradius(){
    
    return this.raidus;
    
    }
    
    getarea(){
    //pi*r*r;
    return  this.radius*this.radius*3.1412;
    
    }
    
    getcircumference(){
        console.log( 2*Math.PI*this.radius)
    
    return 2*Math.PI*this.radius;
    }
    }
    
    var c1=new Circle();
    c1.getarea()
    c1.getcircumference()
    c1.getradius()