export const userService = {
    login
};

function login(params){
    console.log("A")
    if(params.password == "123456"){
        console.log("Entro a true")
        return true;
    }
    else{
        console.log("Entro a false")
        return false;
    }
}