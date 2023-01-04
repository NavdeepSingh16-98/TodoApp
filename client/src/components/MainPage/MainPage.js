import Navbar from "../Navbar"
import TaskModal from "../Modal2"
import Delete from '../../images/delete.svg'
import Edit from '../../images/edit.svg'
import DeleteModal from "../Modals/DeleteModal"
import EditModal from "../Modals/EditModal"
import { useRef } from "react"

import { useNavigate } from "react-router-dom";



function MainPage(){

  const taskModal = useRef();
  const deleteModal = useRef();
  const editModal = useRef();
  

  const navigate = useNavigate();

   const todos = [
    {
    title:'todo1',
    tasks:[
      'going to gym',
      'going to kitchen'
    ]
   },
   {
    title:'todo2',
    tasks:[
      'going to gym',
      'going to kitchen'
    ]
   },
   {
    title:'todo3',
    tasks:[
      'going to gym',
      'going to kitchen'
    ]
   },
   {
    title:'todo4',
    tasks:[
      'going to gym',
      'going to kitchen'
    ]
   },
   {
    title:'todo5',
    tasks:[
      'going to gym',
      'going to kitchen'
    ]
   }
  
  ]

  function callModal(){

    alert('inside call modal')
debugger;
    taskModal.current.buttonClick();


  }

  function viewTasks(title){

    navigate(`/todo/${title}`);
  }

   


    return(
        <>
        <div  >
          <TaskModal ref={taskModal}/>
          <DeleteModal ref={deleteModal} />
          <EditModal ref={editModal} />
            
{/* <Navbar /> */}
      



<section className='h-[80vh] overflow-auto '>

<div className='flex flex-wrap gap-3 justify-center py-3'>


  {


todos && todos.map((todo,index)=>{

  return(

    <div className="flex justify-center" key={index}>
  <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
    <div className="py-3 px-6 border-b border-gray-300">
      {todo.title}
    </div>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{`${todo.tasks.length} tasks`}</h5>
      <p className="text-gray-700 text-base mb-4">
        <p>Tasks:0</p>
        <p>Inprogress:0</p>
        <p>Completed:0</p>
        
      </p>
      <div className="flex justify-around">
      <button onClick={()=>editModal.current.buttonClick()}>
     <img src={Edit} />
      </button>
      
      <button onClick={()=>deleteModal.current.buttonClick()}>
<img src={Delete} />
</button>
      </div>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>viewTasks(todo.title)}>View Tasks</button>
    </div>
    <div className="py-3 px-6 border-t border-gray-300 text-gray-600 gap-5 flex">
      <span>Created At:DD</span>
      <span>Upadted At:DD</span>
    </div>
  </div>
</div>
  )
})
  }

</div>
</section>

        </div>
     
        </>
    )
}

export default MainPage