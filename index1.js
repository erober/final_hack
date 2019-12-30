

function fun(){

    

    
    axios.post('http://localhost:3001/users',{
        username:document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        cpassword: document.getElementById('cpass').value,
        
        name:document.getElementById('name').value,
        
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })


    axios.post('http://localhost:3001/api',{
        username:document.getElementById('username').value,
        api1_1: 0,
        api1_2: 0,
        api1_3: 0,
        api2_1: 0,
        api2_2: 0,
        api2_3: 0,
        api3_1: 0,
        api3_2: 0,
        api3_3: 0,
        api4_1: 0,
        api4_2: 0,
        api4_3: 0,
        api5_1: 0,
        api5_2: 0,
        api5_3: 0,
        api6_1: 0,
        api6_2: 0,
        api6_3: 0,
        
    })
    .then((response)=>{

        console.log("api");
    })
    .catch((error)=>{

        console.log(error);
    })
}

function funt(){
    

    var pass=document.getElementById('pass1').value;
        var usern=document.getElementById('usern').value;
    axios.get(`http://localhost:3001/users/${usern}`)
    .then((response)=>{
        console.log("stop")
        
        
        
        if(response.data[0].password==pass && response.data[0].username==usern)
        {
            sessionStorage.setItem("un",response.data[0].username);
            
            window.open('dashboard.html','_self');
            
            
        }
        else {alert("Invalid username or password")}
       
    })

    .catch((err) => {
       console.log(err)
    })}