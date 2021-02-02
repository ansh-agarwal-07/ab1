class Ground{
    constructor(x,y,w,h){
        var option={isStatic:true}
        this.body= bodies.rectangle(x,y,w,h,option)
        world.add( wor,this.body)
        this.w=w
        this.h = h


    }

      display(){
          var pos = this.body.position
      rect(pos.x,pos.y,this.w,this.h)
     }
}