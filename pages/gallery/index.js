import Navbar from '../component/Navbar';
import Footbar from '../component/Footbar';
import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';


function index(){
  return (
    <>

<main className="bg-gray-900 min-h-screen ">
    <Navbar />
    <div>


    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen items-center justify-center"
    >
      <div className="">
      
      <br></br>

  <br></br>

        <p>Gallery</p>  

        
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-8">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1552223412-f31b9e4d749c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MjkxMDN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1549487027-8c93657755e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw2MjkxMDN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1544592732-83bbbfc46783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8NjI5MTAzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1562616293-1a11a7816903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8NjI5MTAzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1561502401-706961d9037a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTR8NjI5MTAzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>

</div>


      </div>
    </motion.div>



    <br></br>

<br></br>
<br></br>

<br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>


    

    </div>
    <Footbar />

    </main>
    </>
  )
}


export default index 
  