// function timer (name) {
//     console.log('display name after some time...');
//     setTimeout(()=>{
//         console.log('name : ',name);

// },2000)
// }
// timer('Era')



for(var i=0 ;i <5; i++){
    setTimeout(()=>{
         console.log('with set timeout',i)
        },0)
}


for(var i=0 ;i <5; i++){
    
         console.log('without settimeout',i)
        
}