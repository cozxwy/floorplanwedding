
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
    <Footbar />
    <div className=''>
 

<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="">
      
       

        
       <p className="m-5 max-w-lg text-4xl font-semibold leading-loose text-gray-900 dark:text-white text-center mx-auto"> สถานที่จัดงาน </p>
      
       <p className="m-5 max-w-lg text-xl font-semibold leading-loose text-gray-900 dark:text-white text-center mx-auto">   Grand Ballrom CDC <br></br> เลียบด่วนรามอินทรา <br></br> วันที่ 26 / 08 / 2023 </p>
      
       <div className="bg-gradient-to-r from-yellow-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-md h-15 text-center align-middle "><p className='text-black'> Dress Code</p></div>

<br></br>
<br></br>
       <Link href="https://goo.gl/maps/gEdgGKYYx3oSPhfi8">
       <img className=" animate-pulse h-20 mx-auto max-w-xs rounded-lg shadow-xl dark:shadow-gray-800 " src="https://img.freepik.com/premium-vector/google-maps-logo_578229-304.jpg" alt="image description"/>
       </Link>
      </div>
    </motion.div>
      
    </div>
    

    </main>
    </>
  )
}


export default index 
  