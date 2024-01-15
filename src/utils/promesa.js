

function Fetch(dataBase,time){

    return new Promise((resolve, rejact)=>{

     setTimeout(()=>{
        resolve(dataBase);
        rejact(new Error("algo esta mal"))
     }, time)

    })
}

export default Fetch;