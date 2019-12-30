var un=sessionStorage.getItem('un');
    var arr=new Array;


function fun(){

    
    axios.get(`http://localhost:3001/api/${un}`)
    .then((response)=>{
        console.log("s")
        console.log(response)
        
       arr[0]=response.data[0].api1_1;
       arr[1]=response.data[0].api1_2;
       arr[2]=response.data[0].api1_3;
       arr[3]=response.data[0].api2_1;
       arr[4]=response.data[0].api2_2;
       arr[5]=response.data[0].api2_3;
       arr[6]=response.data[0].api3_1;
       arr[7]=response.data[0].api3_2;
       arr[8]=response.data[0].api3_3;
       arr[9]=response.data[0].api4_1;
       arr[10]=response.data[0].api4_2;
       arr[11]=response.data[0].api4_3;
       arr[12]=response.data[0].api5_1;
       arr[13]=response.data[0].api5_2;
       arr[14]=response.data[0].api5_3;
       arr[15]=response.data[0].api6_1;
       arr[16]=response.data[0].api6_2;
       arr[17]=response.data[0].api6_3;
       arr[0]++;
       console.log(arr)
       
       
       setTimeout(function(){ del(); }, 1000);
       

    


    })


    .catch((err) => {
       console.log(err)
    })

    console.log(arr)

    
    
    setTimeout(function(){ del(); }, 1000);
    setTimeout(function(){ post(); }, 2000);

    

    

    
    
   

}

function del(){
    axios.delete(`http://localhost:3001/api/${un}`)
    .then(res=>{
        console.log(res) 
    })
    .catch(err=>{
        console.log(err)
    })

   
}

function post(){
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