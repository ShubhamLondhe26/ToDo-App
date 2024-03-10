import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const AppComponent = () => {
    const [Tasksadd,setTasksadd] = useState([]);
    // const[Tsklst,setTsklst] = useState()

    function handletask(){
        
    }
  return (
    <div>
      <h1>ToDo App</h1>
      <div>
        <input type="Text" placeholder="Enter Tasks......"></input>
        <button type="submit" value={Tasksadd} onChange={(e)=> setTasksadd(e.target.value)} onClick={}>Add Task</button>
        <button type="submit">View Tasks</button>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th colSpan={2}>Tasks</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {Tasksadd.map((work) => 
                <tr key = {work.task}>
                <td>#</td>
                <td colSpan={2}>{work}</td>
                <td>Demo</td>
                <td>@Demo</td>
              </tr>
              )}
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AppComponent;
