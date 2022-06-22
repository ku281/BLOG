
import {Box,Typography,makeStyles} from '@material-ui/core';
//import { mergeClasses } from '@material-ui/styles';
const useStyles=makeStyles({
    container:{
        margin:10,
        borderRadius:10,
        border:"1px solid black",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        
        
    },
    image:{
        height:125,
        Weight:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0'
    },
    detail:{
        fontSize:14,
        wordBreak:"break-word"
    },
    heading:{
        fontSize:18,
        fontWeight:600,
        textAlign:'center'
    }
})
const Post =({post})=>{
    const classes=useStyles();
   // const url =" https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx"
   //const url= "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx";
   const url= post.picture|| "https://www.gstatic.com/webp/gallery/3.jpg";
   
   const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
} 
   //const url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80create.jsx ";
    return(
        <Box className ={classes.container}>
       

       <img src={url} alt="wrapper" className={classes.image}/>
       <Typography className={classes.text}>{post.categories}</Typography>
       <Typography className={classes.heading}>{addEllipsis(post.title,20)}</Typography>
       <Typography className={classes.text}>Author:{post.username}</Typography>
       <Typography classNaem={classes.detail}>{addEllipsis(post.description,30)}</Typography>
        </Box>
        
    )
}
export default Post;
