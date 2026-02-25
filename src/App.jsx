import ToDo from "./ToDo";
import Login ,{User,Setting,Userkey} from "./UserComponent";


function App(){
  const userobj={ name:"john", age:30, city:"bangalore"};
  const userarray=["john","doe","smith"];
  let path="E:/react-blog/public/vite.svg";

  const name=undefined;
  function operation(a,b,op){

    if (op==="+"){
      return a+b;
    }else if(op==="-"){
      return a-b;
    }else if(op==="*"){
      return a*b;
    }else if(op==="/"){
      return a/b;
    }
  }

  const address="bangalore"
  function add(a,b){
   return (a+b);  
  }
  // const name="react";
  let x=20;
  let y=30;
  return(
    <div>first project
      {/* {name} */}
      {10+20}
      {x*y}
      <Login/>
      <User/>
      <Setting/>
      <Fruit/>  
      <ToDo/>
      <h1>{Userkey}</h1>
      <button onClick={()=>alert()}>click</button>
       <input type="text" value={name} />
      <h1>{address}</h1>
     <h1>{x+y}</h1>
      <h1>{add(10,10)}</h1>
      <h1>{operation(10,20,"+")}</h1>
      <h1>{name?name:"default"}</h1>
      <h1>{userobj.age}</h1>
      <h1>{userarray[0]}</h1>
      <h1>{path}</h1> 
      

     </div> 
    
  )
}

function Fruit(){
  return (
    <div>fruit</div>
  )
}

export default App;
