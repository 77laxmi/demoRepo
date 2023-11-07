function timer (name) {
    console.log('display name after some time...');
    setTimeout(()=>{
        console.log('name : ',name);

},2000)
}
timer('Era')