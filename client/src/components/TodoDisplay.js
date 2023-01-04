import { useParams,useNavigate } from 'react-router-dom';

import Edit from '../images/edit.svg'
import Delete from '../images/delete.svg'
function TodoDisplay(){


    const {todoTitle} = useParams();

    const navigate = useNavigate();


    return(

        <>
     <div class="flex flex-col">
        <div className='flex pt-2 '>
        <button type="button" className="float-left inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>navigate(-1)}>Back</button>
       <h1 className='w-full'>{todoTitle}</h1>

        </div>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                S.No.
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Title
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Status
              </th>
              <th scope="col" colSpan={2} class="text-sm font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead >
          <tbody>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Going To Gym
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                In Progress
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-around">
              <button type="button" class="  bg-transparent text-slate-500  font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-blue-700 hover:shadow-lg focus:text-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:text-blue-800 active:shadow-lg transition duration-150 ease-in-out"><img src={Edit} /></button>
            
              <button type="button" class="  bg-transparent text-slate-500  font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-slate-700 hover:shadow-lg focus:text-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:text-blue-800 active:shadow-lg transition duration-150 ease-in-out"><img src={Delete} /></button>

              </td>
            </tr >
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Going For BreakFast
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                In Progress
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-around">
              <button type="button" class="  bg-transparent text-slate-500  font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-blue-700 hover:shadow-lg focus:text-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:text-blue-800 active:shadow-lg transition duration-150 ease-in-out"><img src={Edit} /></button>
            
              <button type="button" class="  bg-transparent text-slate-500  font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-slate-700 hover:shadow-lg focus:text-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:text-blue-800 active:shadow-lg transition duration-150 ease-in-out"><img src={Delete} /></button>

              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default TodoDisplay