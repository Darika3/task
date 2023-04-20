import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Employees = (props) => {
  console.log(props);
  const [text, setText] = useState(props.employees.map((e) => ({ ...e })));
  console.log(props.employees);
  const handleEditInput = (e, index) => {
    const { name, value } = e.target;
    const newList = [...text];
    newList[index][name] = value;
    setText(newList);
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Days</th>
          <th>Salary per day</th>
        </tr>
      </thead>

      {props.employees.map((elem, index) => (
        <tbody>
          <tr key={index}>
            <td>{elem.name}</td>
            <td>{elem.surname}</td>
            <td>
              <input
                name="days"
                value={text[index].days}
                onChange={(e) => handleEditInput(e, index)}
                type="text"
              />
            </td>
            <td>
              <input
                name="salaryPerDay"
                value={text[index].salaryPerDay}
                onChange={(e) => handleEditInput(e, index)}
                type="text"
              />
            </td>
            <td>{text[index].days * text[index].salaryPerDay}</td>
          </tr>
          ;
        </tbody>
      ))}
    </Table>
  );
};

export default Employees;

// import React, { useState } from 'react'
// import "./Salary.css"
// const Salary = (props) => {
//     const [text, setText] = useState(props.employees.map(e => ({...e})));
//     // console.log(props.employees);
//     const handleEditInput = (e, index)=>{
//         const { name, value } = e.target;
//         const newList = [...text];
//         newList[index][name] = value;
//         setText(newList);
//     }
//   return (
//     <div>
//         <h2>Task3</h2>
//         <table>

//             <tr>
//     <th>Name</th>
//     <th>surname</th>
//     <th>Days</th>
//     <th>SalaryPerDay</th>
//   </tr>

//   {props.employees.map((e, index) => (
//     <tr key={index}>
//         <td>{e.name}</td>
//         <td>{e.surname}</td>
//         <td><input name="days" value={text[index].days} onChange={(e) => handleEditInput(e, index)} type="text" /></td>
//         <td><input name="salaryPerDay" value={text[index].salaryPerDay} onChange={(e) => handleEditInput(e, index)} type="text" /></td>
//         <td>{text[index].days * text[index].salaryPerDay}</td>
//     </tr>
// ))}
// </table>
//     </div>
//   )
// }

// export default Salary
