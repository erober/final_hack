var un=sessionStorage.getItem('un');
    var arr=new Array;

    
function fun(){
    axios.get()
    
    
    
    
    
    
    
    for (let i=0;i<18;i++)
    {
        arr[i]=0;
    }
    arr[0]++;
    axios.post('http://localhost:3001/api',{
        username: un,
        api1_1 : arr[0],
        api1_2 : arr[1],
        api1_3 : arr[2],
        api2_1 : arr[3],
        api2_2 : arr[4],
        api2_3 : arr[5],
        api3_1 : arr[6],
        api3_2 : arr[7],
        api3_3 : arr[8],
        api4_1 : arr[9],
        api4_2 : arr[10],
        api4_3 : arr[11],
        api5_1 : arr[12],
        api5_2 : arr[13],
        api5_3 : arr[14],
        api6_1 : arr[15],
        api6_2 : arr[16],
        api6_3 : arr[17],
        
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })
}

function fun1(){
    for (let i=0;i<18;i++)
    {
        arr[i]=0;
    }
    arr[1]++;
    axios.post('http://localhost:3001/api',{
        username: un,
        api1_1 : arr[0],
        api1_2 : arr[1],
        api1_3 : arr[2],
        api2_1 : arr[3],
        api2_2 : arr[4],
        api2_3 : arr[5],
        api3_1 : arr[6],
        api3_2 : arr[7],
        api3_3 : arr[8],
        api4_1 : arr[9],
        api4_2 : arr[10],
        api4_3 : arr[11],
        api5_1 : arr[12],
        api5_2 : arr[13],
        api5_3 : arr[14],
        api6_1 : arr[15],
        api6_2 : arr[16],
        api6_3 : arr[17],
        
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })
}

function fun2(){
    for (let i=0;i<18;i++)
    {
        arr[i]=0;
    }
    arr[2]++;
    axios.post('http://localhost:3001/api',{
        username: un,
        api1_1 : arr[0],
        api1_2 : arr[1],
        api1_3 : arr[2],
        api2_1 : arr[3],
        api2_2 : arr[4],
        api2_3 : arr[5],
        api3_1 : arr[6],
        api3_2 : arr[7],
        api3_3 : arr[8],
        api4_1 : arr[9],
        api4_2 : arr[10],
        api4_3 : arr[11],
        api5_1 : arr[12],
        api5_2 : arr[13],
        api5_3 : arr[14],
        api6_1 : arr[15],
        api6_2 : arr[16],
        api6_3 : arr[17],
        
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })
}
