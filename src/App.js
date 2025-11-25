import Todo from "./component/Todos";
import {v4 as uuidv4} from "uuid";
import "./App.css"
import { Mycontext } from "./contextodo/ContextToDo";
import { useState } from "react";
function App() {
const [todos,setTodos] = useState([]);

  return (
   
    <div className="h-screen flex items-center justify-center">
      <Mycontext.Provider value={{todos,setTodos}}>
   <Todo/>
   </Mycontext.Provider>
    </div>
    
   
  );
}

export default App;
