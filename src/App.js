// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

export default function TodoList(){

  const Status = { //bakit walang enums, what the heck is typescript?
    IP : "In Progress",
    D : "Done",
    Null : null
  }

  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(Status.Null)

  function toggleProgress(index){
      const searchList = list.map((c, i)=>
        i === index ? {...c, status: c.status === Status.IP ? Status.D : Status.IP} : c
      );
      setList(searchList);
  }

    // Tatlong oras kong hinahanap anung mali nung una
    // Da't pala `status: ...c, status: c.status` di pwedeng `...c, c.status` lang
    //Reminder to use '`key:value`

  return(
    <>
      <h1>To do List</h1>
      <input
      value = {task}
      onChange={e=>setTask(e.target.value)}
      />
      &nbsp;    
      <button onClick={()=>{
        setList([
          ...list,
          {
            id: list.length,
            name: task,
            status: 'In Progress'
          }
        ]);
        setTask('')
      }}>Add</button>
      &nbsp;    
      <select
      // value={}
      // onChange={}        
      >
        <option value = {Status.Null} default>
          All
        </option>
        <option value = {Status.IP} >
          In Progress
        </option>
        <option value = {Status.D}>
          Done
        </option>
      </select>
      <hr/>
      
      <ul>
        {list.map(task =>(

          <li key = {task.id}>

            {task.status === 'Done' ?(
              <span><del>{task.name}</del> : {task.status}</span>
            ):(
              <span>{task.name} : {task.status}</span>
            )}

            &nbsp;    
            <button onClick={() => toggleProgress(task.id)}>Check off</button>
          </li> 
        ))}
      </ul>
    </>
  )
}


/*
Personal Notes cos gah knows I ain't rememberin anything after I'm done with this activity
1. 

*/
