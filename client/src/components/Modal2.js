import { useState } from "react"
function Modal2(){

    const [showModal,setShowModal] = useState(false)

    return(
        <>
         <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>setShowModal(true)}>Button</button>

         <div className="w-full h-[100vh]">
{
    showModal ? (<>
    <div className="absolute inset-0 bg-black opacity-40 ">

</div>
<div className="w-full h-full flex justify-center items-center">
        <div className="  relative  w-[50%] h-[40%] max-h-lg bg-white text-[black] rounded-lg opacity-100 ">

        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>setShowModal(false)}>Danger</button>
            </div>
            </div>
            </>
    ):null
}

         </div>
        </>
    )
}
export default Modal2