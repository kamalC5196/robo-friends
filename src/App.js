import React,{ useState,useEffect } from 'react';
import Card from './components/Card';
import Search from './components/Search';
import { robots } from './robots';
function App() {
let [robot,setRobo] = useState("");

function handleEvent(e){
    setRobo(e.target.value);
    console.log(robot)
}
    
return (
      
    <div className="tc">
        <h1>RoboFriends</h1>
        <Search searchChange={handleEvent}/>
        {
            robots.map((e,i)=>(
                e.name.toLowerCase().includes(robot) && <Card data={e} key={i} />
            ))
      
        }
        <br/>
        
    </div>
  );
}

export default App;
