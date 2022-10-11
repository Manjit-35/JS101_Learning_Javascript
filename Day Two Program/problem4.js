//variables in Data-Base
let db_user="manjit123@gmail.com";
let db_pass="123456";

//input
let user="manjit123@gmail.com";
let pass="123456";

//output
if(user==db_user){
  if(pass==db_pass){
    console.log(" loged in successfuly");
  }
  else{
    console.log("incorrect password");
  }
}
else{
  console.log("email is incorrect");
}
