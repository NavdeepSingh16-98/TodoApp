import Navbar from "../Navbar"
import TaskModal from "../Modal2"
import { useRef } from "react"

import { useNavigate } from "react-router-dom";



function MainPage(){

  const taskModal = useRef();

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
      <button>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
      </button>
      {/* <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools --> */}
      <button>
<svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">

<g fill="#000000">

<path fill-rule="evenodd" d="M11.436 1.005A1.75 1.75 0 0113.902.79l.702.589a1.75 1.75 0 01.216 2.465l-5.704 6.798a4.75 4.75 0 01-1.497 1.187l-2.572 1.299a.75.75 0 01-1.056-.886l.833-2.759a4.75 4.75 0 01.908-1.68l5.704-6.798zm1.502.934a.25.25 0 00-.353.03l-.53.633 1.082.914.534-.636a.25.25 0 00-.031-.352l-.703-.59zm-.765 2.726l-1.082-.914-4.21 5.016a3.25 3.25 0 00-.621 1.15L5.933 11l1.01-.51a3.249 3.249 0 001.024-.812l4.206-5.013z" clip-rule="evenodd"/>

<path d="M3.25 3.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75V9A.75.75 0 0115 9v4.75A2.25 2.25 0 0112.75 16h-9.5A2.25 2.25 0 011 13.75v-9.5A2.25 2.25 0 013.25 2H6a.75.75 0 010 1.5H3.25z"/>

</g>

</svg>
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