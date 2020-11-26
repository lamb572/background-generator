var database = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "will",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "bobby",
        timeline: "great day"
    },
    {
        username: "john",
        timeline: "boring day"
    },
    {
        username: "will",
        timeline: "helllo all"
        }
];





function isUserValid(username, password){ 
    for (var i=0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password) {
            return true;
            } 

    }
    return false;
}


function signIn(user, pass){
    if (isUserValid(user, pass)){
            console.log(newsFeed);
        }else{
            alert("sorry, wrong username and password!");
        }

};


var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt(" whats your password?");

signIn(userNamePrompt,passwordPrompt);

let bob ="bob"