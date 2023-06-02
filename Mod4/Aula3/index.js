function sayMyname(name) {
    if(name == '') {
        throw ("name is required");
    }
    console.log("after error");
}

try{
     sayMyname()
}catch(e) {
    console.log(e);
}