import Link from 'next/link'
import Head from 'next/head';

export default function Navbar() {
    return <>



    <header className=' w-full h-16  border-gray-200 dark:bg-white drop-shadow-2xl z-40 fixed  text-white text-2xl pt-1 '>

          
    <Head>

    <title>Pim & Boom Wedding</title>
    <meta name="description" content="together forever"></meta>
    <link rel="icon" type="image/x-icon" href="/logo.png"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"/>
    </Head>


    <link rel="shortcut icon" href="/public/pblogo.svg" />

    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white ">
 
        <div className="flex flex-row justify-between items-center  mx-auto max-w-screen-xl ">
           
            <a className="flex items-center">
                <img src="/pblogo.svg" className="h-14 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xs text-black font-semibold whitespace-nowrap dark:text-black">next chapter of life.</span>
            </a>
            <div className="flex items-center lg:order-2">
            <a className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
            <a  className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
          
         

            <Link href="#formInput">
            <p  className="justify-items-end float-right text-white bg-[#16243C] 
            hover:bg-[#16243C]  focus:ring-4 focus:ring-primary-300 font-medium rounded-full 
            text-sm px-2 lg:px-5 py-2 lg:py-2.5  dark: bg-[#16243C]  dark:hover:bg-[#16243C] 
             focus:outline-none dark:focus:ring-primary-800 ">ลงทะเบียนร่วมงาน</p>
            </Link>
            </div>
          
         
        </div>
        
    </nav>
</header>

</>
;
  }