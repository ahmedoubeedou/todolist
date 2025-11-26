import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//Icons
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useContext, useState } from 'react';
import { Mycontext } from '../contextodo/ContextToDo';
import MessageDelate from './MessageDelate';
///***debut */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
/***fin */
//finicons
export default function Todos({todo})
{
    const {todos,setTodos} = useContext(Mycontext);
    const [ColorChekde,setColorChekde] = useState(false);
    const [disaiBle,setDisaiBle] = useState(false);
    const [edit,setEdit] = useState(false);
    const [champOne,setchampOne] = useState("");
    const [champTow,setchampTow] = useState("");
    //********************debut */
    function ChekedValue()
    {
        
    const copyTodo=todos.map((e)=>{
        if(todo.id===e.id)
        {
            todo.chekh = !todo.chekh;
              setColorChekde(todo.chekh);
            return e;
          
        }
        else{
            return e;
        }
    })
   
    setTodos(copyTodo);
    localStorage.setItem("todos",JSON.stringify(copyTodo));
    }
    //*********************fin */
    //****************debut *************/
    function DelateValue()
    {
     setDisaiBle(true)
    }
     //****************fin *************/
      //****************debut *************/
     function heandelDelate()
     {
        const copyTods=todos.filter((e)=>{
            return e.id!==todo.id;
        })
        setTodos(copyTods);
        setDisaiBle(false);
             localStorage.setItem("todos",JSON.stringify(copyTods));
     }
      //****************fin *************/
          //****************debut *************/
    function arierDelate()
    {
        setDisaiBle(false);
    }
       //****************fin *************/
       //****************debut *************/
     function editChamp()
     {
        setEdit(true);
     }
         //****************fin *************/
        
           //****************debut *************/
     function  heandelEdit()
     {
        let editTodo={
            id:todo.id,
            title:champOne,
            body:champTow,
            chekh:todo.chekh,    
        }
        const copyTodo=todos.map((e)=>{
            if(e.id === todo.id)
            {
                return editTodo;
            }
            else{
                return e;
            }
        })
        setTodos(copyTodo);
        setEdit(false)
        setchampOne("");
        setchampTow("");
        localStorage.setItem("todos",JSON.stringify(copyTodo));
     }
         //****************fin *************/
         //****************debut *************/
         function heandelArier()
         {
            setEdit(false)
             setchampOne("");
        setchampTow("")
        ;
         }
         //****************fin *************/
    return(
        <>
      <Card className='card-hover' sx={{background:"#1a237e",cursor:"pointer",color:"white",margin:"10px"}} >
        
            <CardContent sx={{ height: '80%' }}>
                 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display:"flex",alignItems:"center"}}>
        <Grid size={8}>
          <Typography variant="h6" className={todo.chekh?"text-deco":""}   sx={{fontSize:"16px"}}>
             {todo.title}
              </Typography>
              <Typography variant="body2" >
              {todo.body}
              </Typography>
        </Grid>
        <Grid size={4} sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
         <DeleteRoundedIcon onClick={DelateValue}  className='!bg-white icons  rounded-full !text-red-600' />
         <CheckRoundedIcon onClick={ChekedValue} className='bg-white icons  rounded-full !text-green-500' style={todo.chekh?{background:"green"}:{background:"white"}}/>
         <EditRoundedIcon onClick={editChamp} className='!bg-white  icons  rounded-full !text-blue-500'/>
        </Grid>
      </Grid>
    </Box>
             {/* {disaiBle?<MessageDelate/>:""} */}
             </CardContent> 
       
        </Card>
        {/* debut */}
           <Dialog
        open={disaiBle}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Suprimer la Tache
        </DialogTitle>
        // <DialogContent>
        //   <DialogContentText id="alert-dialog-description">
        //   Suprimer
        //   </DialogContentText>
        // </DialogContent>
        <DialogActions>
          <Button onClick={heandelDelate} sx={{color:"red"}}>DELATE</Button>
          <Button onClick={arierDelate} sx={{color:"blue"}}>
            NO
          </Button>
        </DialogActions>
      </Dialog>
      {/* fin */}
      {/* debut */}
        <Dialog
        open={edit}
        onClose={heandelArier}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign:"center"}}>
      Modifier
        </DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",gap:"7px"}}>
          <TextField value={champOne} size="small" onChange={(e)=>{setchampOne(e.target.value)}} sx={{cursor:"pointer",marginTop:"10px"}} label="Title" variant="outlined" />
          <TextField value={champTow} size="small" onChange={(e)=>{setchampTow(e.target.value)}} sx={{cursor:"pointer",marginTop:"10px"}} label="Body" variant="outlined" />
        </DialogContent>
        <DialogActions >
          <Button onClick={heandelEdit} sx={{color:"red"}} disabled={champOne.length>=2&&champTow.length>=2?false:true}>Confirmer l'Action</Button>
          <Button onClick={heandelArier} sx={{color:"blue"}}>
            NO
          </Button>
        </DialogActions>
      </Dialog>
      {/* fin */}
        </>
        );
}
