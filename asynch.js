const promise =  new Promise((res,rej) => {
     setTimeout(()=>{
       let x = 5 ;
       if(x<= 10){
        res('promise is resolved')
       } else{
        rej('Promise is rejected')
       }
     },3000)

}).then((result)=>{
    console.log(result);

}).catch((err)=>{
    console.log(err);
})