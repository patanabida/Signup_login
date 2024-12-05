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

function Login(str,password){
    
    let filterData= userName.filter((el,i)=>el==str);
    //console.log(filterData)
    if(filterData.length==0){
        //i need to push
        
        console.log("user Not Found...`Please SignUp");
    }else {
       if(password=="Emp@123"){
        console.log("Login Sucessfully...")
       }else {
        console.log("Worng Password");
       }
    }
}
Login("Bob","emp@123")