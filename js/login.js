function show(){
    var getpass = document.getElementById("mypass");

    if(getpass.type === "password"){
       getpass.type = "text";
    }else{
        getpass.type = "password";
    }
}