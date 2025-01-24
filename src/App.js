// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

export default function TodoList(){

  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  function toggleProgress(index){
      const searchList = list.map((c, i)=>
        i === index ? {...c, status: c.status === 'In Progress' ? 'Done' : 'In Progress'} : c
      );
      setList(searchList);
  }

    // Tatlong oras kong hinahanap anung mali nung una
    // Da't pala `status: ...c, status: c.status` di pwedeng `...c, c.status` lang

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
      <hr/>
      
      <ul>
        {list.map(task =>(

          <li key = {task.id}>

            {task.status === 'Done' ?(
              <del>{task.name} : {task.status}</del>
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
