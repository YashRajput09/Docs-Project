import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Cards({data, referance}){
 const {desc, fileSize} =  data;
    return(
        <>
        <motion.div drag dragConstraints={referance} whileDrag={{scale: 1.2}} dragTransition={{ bounceStiffness: 100, bounceDamping: 20}}  className="flex gap-8  w-48 h-60">
        <div className="relative rounded-[35px] bg-zinc-800/80 p-4 pt-5 text-zinc-300 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm py-4 leading-tight'>
              {desc}
            </p>
            <div className="footer absolute bottom-0 left-0 w-full  ">
                <div className="flex item-center justify-between px-7 py-2">
                    <h5 className='text-sm'>{fileSize}</h5>
                    <span className='w-6 h-6 rounded-full bg-zinc-600/80 flex justify-center items-center '>
                    <MdOutlineFileDownload size=".8em"/>
                    </span>
                </div>
                <div className="w-full py-3 bg-green-700 flex justify-center">
                    <h3 className='text-sm fonst font-semibold'>Download Now</h3>
                </div>
            </div>
        </div>
        </motion.div>
        </>
    )
}

export default Cards