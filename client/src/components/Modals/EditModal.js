import { useState,forwardRef,useImperativeHandle } from "react"
const EditModal = forwardRef((props,ref)=>{

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
        {/* <div className="  absolute top-[25%] left-[25%] z-10  w-[50%] h-[30%] max-h-lg bg-white text-[black] rounded-lg opacity-100 ">



        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>setShowModal(false)}>Danger</button>
            </div> */}

<div class="block absolute top-[25%] left-[30%] opacity-100 z-10 p-6 rounded-lg shadow-lg bg-white max-w-lg w-[40%]">
  <form>
    <div class="form-group mb-6">
      <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Todo name</label>
      <input type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" placeholder="Enter todo name"/>
     
    </div>

    <div className="flex flex-col justify-center gap-5 sm:flex-row sm:justify-around px-12">

    <button  class="
    w-[max-content]
    p-2
      sm:px-6
      sm:py-2.5
      bg-gray-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-700 hover:shadow-lg
      focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Cancel</button>

    <button type="submit" class="
    p-2
    w-[max-content]
      sm:px-6
      sm:py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Submit</button>
    </div>
    
  
  </form>
</div>
            {/* </div> */}
            </>
    ):null
}

         </div>
        </>
    )
});
export default EditModal