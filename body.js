class body {
    constructor(x,y,width,height)
    {
        var options ={
            restitution: 1.0
        }

        this.Body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        rect(this.position.x, this.position.y, this.width, this.height);
    }
}