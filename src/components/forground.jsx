import React, { useRef, useState } from 'react'
import Cards from './cards'


function Forground(){
    const ref = useRef(null);
    // const [data, setData] = useState()
   const data = [{desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", fileSize: '3MB'},
        {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", fileSize: '1MB'},
        {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.", fileSize: '2MB'},
        {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", fileSize: '.3MB'},
        {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", fileSize: '.8MB'},
    ]

    return(
        <>
        <div ref={ref} className="p-5 fixed top-0 left-0 z-[3] w-full h-screen flex gap-8">
           {data.map((item, index)=>( 
            < Cards data={item} referance={ref}/>
           ))}
        </div>
        </>
    )
}
export default Forground