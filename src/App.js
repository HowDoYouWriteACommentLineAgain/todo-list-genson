// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

export default function TodoList(){
  /*
  TODO:
  [WIP] Seperate Create and Read from Update and delete so that I can lift the states up.
  [WIP] Make CR it's own prop
  [WIP] Make UD it's own prop
  
  */
  const Status = { //bakit walang enums, what the heck is typescript?
    IP : "In Progress",
    D : "Done",
    Null : null
  }

  const [selectedStatus, setStatus] = useState(Status.Null)
  const [list, setList] = useState([]);
  

  function toggleProgress(index){
      const searchList = list.map((c, i)=>
        i === index ? {...c, status: c.status === Status.IP ? Status.D : Status.IP} : c
      //I hate that it works, it's confusing but it works
      // cond1 ? { ..., cond2 ? ifTrueCond2 : ifFalseCond1 } : ifFalsecond1
      );
      setList(searchList);
  }

    // Tatlong oras kong hinahanap anung mali nung una
    // Da't pala `status: ...c, status: c.status` di pwedeng `...c, c.status` lang
    //Reminder to use '`key:value`

  return(
    <>
      <h1>To do List</h1>

      <CR selectedStatus={selectedStatus} setStatus={setStatus} list={list} setList={setList} Status={Status}></CR>
      <hr/>
      
      <ul>
        {/*note is there a way to make this map immutable*/}
        {/*Changing this should hopefully not change the actual ilst but idk.*/}
        {
        
        /*Filtering*/

        // list.filter()
        
        list.map(task =>(

          <li key = {task.id}>

            {task.status === 'Done' ?(
              <span><del>{task.name}</del> : {task.status}</span> //adds strike through
            ):(
              <span>{task.name} : {task.status}</span>
            )}

            &nbsp;    

            <button onClick={() => toggleProgress(task.id)}>Check off</button> {/*button to check off*/}
          </li> 
        ))}
      </ul>
    </>
  )
}

function CR({selectedStatus, setStatus, list, setList, Status}){
  const [taskName, setTaskName] = useState('');
  return(
    <>
      {/*Add Logic : CREATE*/}
      <input
        value = {taskName}
        onChange={e=>setTaskName(e.target.value)}
        />
        &nbsp;    
        <button onClick={()=>{
          setList([
            ...list, //array spread to copy prev array and append a new task
            {
              id: list.length,
              name: taskName,
              status: 'In Progress'
            }
          ]);
          setTaskName('')//to reset the inputList 
        }}>Add</button>
        &nbsp;

        {/*Filter Logic : READ*/}
        <select
        value={selectedStatus}
        onChange={e => setStatus(e.target.value)}        
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
    </>
  )
}

// function UD({})


/*
Personal Notes cos gah knows I ain't rememberin anything after I'm done with this activity
1. 

*/
