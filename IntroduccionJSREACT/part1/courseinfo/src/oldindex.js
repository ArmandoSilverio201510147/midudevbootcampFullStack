import React from "react";
import ReactDOM from "react-dom";
/*
const App = () => {
  const course = 'Half Stack application develompmet'
  const part1 = 'Fundamentos de React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a componet'
  const exercise3 = 14

*/
/*
forma corta const Title = ({course}) = <h1>{course}</h1>
*/
/*const Header = (props) =>{
  return <h1>{props.course}</h1>
}

const Content = (props) =>{
  return (
    <div>
        <p>{props.part1} {props.exercise1}</p>
        <p>{props.part2} {props.exercise2}</p>
        <p>{props.part3} {props.exercise3}</p>

    </div>
  )
}



  const Total = () =>{
    const suma = exercise1 + exercise2 +exercise3
    return <p>Number of exercises {suma}</p>
  }
  
  return (
    <div>
      <Header course = {course}></Header>
      <Content part1 = {part1} exercise1 = {exercise1} 
               part2 = {part2} exercise2 = {exercise2}
               part3 = {part3} exercise3 = {exercise3}>
      </Content>
      <Total />
      
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

*/

import { useState } from "react";

const rootElement = document.getElementById('root');

const Counter = ({number}) =>{
  console.log("Counter render");
  return <h1>{number}</h1>
}
const App = (props) =>{
  //desestructuracion
  const [contador, setContador] = useState(0);
/*
  const contador = useState(0)
  const contadorValue = contador[0];
  const updateContador = contador[1];
  */
 const handleClick = () =>{
   setContador(contador + 1);
 }
 const handleClickReset = () =>{
  setContador(0)
 }

  console.log("render");
  
const isEven = contador % 2 === 0
const mensajePar = isEven ? "Es par": "Es impar"
  return(
    <div>
      <p>The counter value is:</p>
      <Counter number = {contador}/>
      <p>{mensajePar}</p>
      <button onClick={handleClick
        /*setContador(prevContador => {
          return prevContador + 1
        })*/
      }>
        Incrementar
      </button>
      <button onClick ={handleClickReset}>Reset</button>
    </div>
  );
};
 



ReactDOM.render(<App />, rootElement);




