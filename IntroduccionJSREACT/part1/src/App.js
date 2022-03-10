import './App.css';
import Mensaje from './Mensaje.js';



const Description = () =>{
    return <p>Esta es la app del curso fullstack bootcamp</p>
}
const App = () => {
    
    return (
        <div className = "App" >
             <Mensaje color= "green" message='Estamos trabajndo'/>
             <Mensaje color= "red" message='En un curso'/>
             <Mensaje color= "yellow" message='De React'/>  
             <Description />
             {+new Date()}
            
         
        </div>
    )
}

export default App;

