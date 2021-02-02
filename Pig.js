class Pig{
    constructor(x,y,w,h){
        var option={'restitution':0.8,'density':1.0,'fiction':0.3}
        this.body= bodies.rectangle(x,y,w,h,option)
        world.add( wor,this.body)
        this.w=w
        this.h = h


    }

      display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        rotate(this.body.angle)
    rect(0,0,this.w,this.h)
    pop()
     }
}