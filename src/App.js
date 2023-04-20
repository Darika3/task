import React, { useState } from 'react'
import Counter from './Components/Counter/Counter/Counter';
import Paragraph from './Components/Pragraph/Paragraph';
import Employees from './Components/Emp/Employees';

const App = () => {
  const [todos,setTodos]=useState([]);
  const handleTask = (newObj)=>{
    // копируем все что уже  было в состоянии todos то есть все таски.
    let newTodos = [...todos]
    // добавили новый таск в маасив newTodos
    newTodos.push(newObj)
    // обновили состояние
    setTodos(newTodos);
    
  };
  let employees = [
    { name: 'SALAMAT', surname: 'BAIKE', days: 20, salaryPerDay: 80 },
    { name: 'Dastan', surname: 'aaa', days: 15, salaryPerDay: 40 },
    { name: 'Emir', surname: 'bbb', days: 22, salaryPerDay: 60 },
    { name: 'Sheraman', surname: 'ccc', days: 15, salaryPerDay: 55 },
    { name: 'Albina', surname: 'kkk', days: 18, salaryPerDay: 44 },
    { name: 'Azret', surname: 'hhh', days: 10, salaryPerDay: 22 },
    { name: 'Mirdin', surname: 'Agai', days: 20, salaryPerDay: 70 },
    { name: 'Bayish', surname: 'zzz', days: 16, salaryPerDay: 33 },
    { name: 'Adilet', surname: 'Gazybekov', days: 11, salaryPerDay: 16 },
    
    { name: 'Aidana', surname: 'pppp', days: 5, salaryPerDay: 28 },
    { name: 'Ilim', surname: 'ttt', days: 12, salaryPerDay: 72 },
    ];
  return (
    <div>
      <Counter />
      <Paragraph handleTask={handleTask} todos={todos}/>
      {/* <Emp employees={employees} /> */}
      <Employees employees={employees}/>
    </div>
  )
}

export default App