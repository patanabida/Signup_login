let userName=["Alice","Bob","Charlie","Delta","Stephen"];
function SignUp(str){
    
    let filterData= userName.filter((el,i)=>el==str);
    //console.log(filterData)
    if(filterData.length==0){
        //i need to push
        userName.push(str)
        console.log("SignUp Sucessfully...");
    }else {
        console.log("Already Registered...")
    }
}
SignUp("Bob");