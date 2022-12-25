import {useState} from 'react'

function ActualPage(){

    const [show,setShow] = useState(false);


    return(
        <>
        <div className="flex">
            

                <nav className="h-[100vh] w-[max-content]">

                    <div className='hover:bg-orange-200'>
                           Main Image
                        {/* <img src="../../images/dashboard.svg" style={{width:'10px',height:'10px'}} /> */}
                        {/* <i class="fa-solid fa-user"></i> */}
                    </div>
<ul>

    <li className='hover:bg-orange-200'>
Icon1
    </li>
    <li className='hover:bg-orange-200'>
Icon2
    </li>
</ul>

                </nav>
               
            

        <nav className="flex justify-between w-full border-b-4 border-red-400 border-solid shadow-slate-700 h-[max-content]">
            <div>

                <input type="text" />
            </div>
<ul className="flex">
<li>image1</li>
<li>image2</li>

</ul>


        </nav>


        </div>
     
        </>
    )
}

export default ActualPage