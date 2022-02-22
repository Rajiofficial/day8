class movies{
    constructor(name,studio,rating){
    this.name="Casino Royale"
    this.studio="Eon Productions"
    this.rating="Pg13"
    }
    movie_name(){
       console.log(this.name)
    }
    studio_name(){
        console.log(this.studio)
    }
    movie_rating(){
        let arr=[];
        for(let i in this.rating){
            let s=this.rating
           console.log(arr.push(s))
        }
        console.log(arr)

        
        
    }
}      
let x= new movies()
x.movie_name()
x.studio_name()
x.movie_rating()



 



