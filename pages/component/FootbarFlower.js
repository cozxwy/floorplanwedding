import Link from 'next/link'

import { motion } from 'framer-motion';
export default function FootbarFlower() {
    return <><motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className=""
    >
     <footer className="fixed  bottom-0 left-0 z-20 w-full shadow md:flex md:items-center md:justify-between md:p-6">
  
  <img className="h-40 max-w-xl rounded-lg " src="flower2.png" alt="image description"/>
  
  
  
  </footer>
    </motion.div>
   


    
</>
;
  }