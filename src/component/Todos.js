import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Todo from "./Todo"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MessageDelate from './MessageDelate';
import { useContext, useEffect, useState } from 'react';
import { Mycontext } from '../contextodo/ContextToDo';
import {v4 as uuidv4} from "uuid";

export default function Todos()
{
  const {todos,setTodos} = useContext(Mycontext);
  const [textFile,setTextFile] = useState("");
  const [title,setTitle] = useState("");
  const [tous,setTous] = useState("");
  // const [coplete,setcoplete] = useState("");
  // const [nocoplete,setnocoplete] = useState("");
  let TodoAfichre = todos;
  const todoComp = todos.filter((e)=>{
    if(e.chekh)
    return e;
  else
    return false;
  })
    const notodoComp = todos.filter((e)=>{
    if(e.chekh)
    return false;
  else
    return true;
  })
  if(tous==="tous" || tous==="")
  {
  TodoAfichre=todos;
  }
  else if(tous==="Tow")
  {
    TodoAfichre=todoComp;
  }
  else{
    TodoAfichre=notodoComp;
  }
  const todoMap=TodoAfichre.map((e)=>{
    return <Todo key={e.id} todo={e}/>;
     })
     /************* Debut */
     useEffect(()=>{
      const copyTodo = JSON.parse(localStorage.getItem("todos")) ?? [];
      setTodos(copyTodo);
     },[]);
     /***********Fin */
//**********************debut****************

function handelAjouter()
{
let todoCreat = {
  id:uuidv4(),
  title:textFile,
  body:title,
  chekh:false,
}
const copyTodo = [...todos,todoCreat];
setTodos(copyTodo);
setTextFile("");
setTitle("");
localStorage.setItem("todos",JSON.stringify(copyTodo))
}
//**********************debut****************
function aficheTodo(titre)
{
  setTous(titre);
}
    return(
  <>


      
      <Container maxWidth="xs" >
        <Box className="scrole" sx={{ background: '#eeeeee',borderRadius:"10px", maxHeight: '80vh',overflowY:"auto",padding:"4px" }} >
           <Typography variant="h5" sx={{textAlign:"center",marginBottom:"10px",padding:"4px",borderBottom:"solid 2px black"}}>
                Mes Taches
              </Typography>
          <div className='w-[96%] m-auto mb-2'>
       <ButtonGroup  variant="contained" sx={{width:"100%"}} >
      <Button value="tous" onClick={()=>{aficheTodo("tous")}} size="large" className='!m-1 rounded-sm  !text-[6px] w-[30%] font-bold'>tout les taches</Button>
      <Button value="Tow" onClick={()=>{aficheTodo("Tow")}} size="large" className='!m-1 rounded-sm !text-[6px] w-[33%] font-bold'>Taches Terminees</Button>
      <Button value="ther" onClick={()=>{aficheTodo("ther")}} size="large" className='!m-1 rounded-sm !text-[6px] w-[37%] font-bold'>Taches No Terminees</Button>
    </ButtonGroup>
    </div>
       
       {todoMap}
        
          <Grid container spacing={10} sx={{padding:"2px",display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"}}>
        <Grid size={4}>
          <Button variant="contained" disabled={textFile.length>=2 && title.length>=2 ?false:true} onClick={handelAjouter} sx={{width:"135px",height:"45px",textAlign:"left",fontSize:"10px"}} color="success">
         Nouvelle Taches
      </Button>
        </Grid>
        <Grid size={8}>
    <TextField value={textFile} size='small' onChange={(e)=>{setTextFile(e.target.value)}} sx={{cursor:"pointer",margin:"4px"}} label="Titre Tache" variant="outlined" />
    <TextField value={title} size='small' onChange={(e)=>{setTitle(e.target.value)}} sx={{cursor:"pointer",margin:"4px"}} label="Body Taches" variant="outlined" />
        </Grid>
      </Grid>
          
        </Box>
      </Container>
   </>
);
}
