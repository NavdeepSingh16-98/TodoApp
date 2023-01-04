import { useState,forwardRef,useImperativeHandle } from "react"
const DeleteModal = forwardRef((props,ref)=>{

    const [showModal,setShowModal] = useState(false)


    // function buttonClick(){

    //     setShowModal(true)
    // }

    useImperativeHandle(ref,()=>({
        buttonClick:()=>{
            setShowModal(true);
        }
    }))

    return(
        <>
         {/* <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={buttonClick}>Button</button> */}

         <div className=" ">
{
    showModal ? (<>
    <div className="absolute inset-0 w-full h-full bg-black opacity-40 ">

</div>
{/* <div className=" flex justify-center items-center"> */}
        <div className="  absolute top-[25%] left-[25%] z-10  w-[50%] h-[30%] max-h-lg bg-white text-[black] rounded-lg opacity-100 ">

<div><h1> Are you Sure ?</h1>
<br/>

</div>
<div>

<button type="button" class="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>setShowModal(false)}>Cancel</button>
<button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>setShowModal(false)}>Danger</button>
</div>
       
            </div>
            {/* </div> */}
            </>
    ):null
}

         </div>
        </>
    )
});
export default DeleteModal