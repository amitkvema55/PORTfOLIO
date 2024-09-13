import React from 'react'

function Home() {
  return (
    <div className="">
         <nav className="w-1/2 mx-auto flex justify-center ">
    

    <ul className=" bg-blue-900 flex gap-x-10 px-3 mx-auto rounded-md fixed  bottom-0 py-2 z-1 opacity-100">
                          
    <a href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsYUkLlFXgGXvrlyivL7-zpvV3EM4Ynz7Mg&s" alt="" width="30px" height="30px" className="rounded-full" /></a>
                        <a href="#about"><img src="https://i.ibb.co/c8c5mBP/ABOUT-ME.jpg" alt="" width="30px" height="30px" className="rounded-full" /></a>
                       <a href="#skill"><img src="https://i.ibb.co/3r80qnx/skills.png" alt="" width="30px" height="30px" className="rounded-full" /></a>
                       <a href="#qualification"><img src="https://i.ibb.co/981VJf5/degree-logo.jpg" alt="" width="30px" height="30px" className="rounded-full"/></a>
                        <a href="#projects"><img src="https://i.ibb.co/Rj8VBTt/projects.png" alt="" width="30px" height="30px" className="rounded-full" /> </a>
                    </ul>
      
   
    
   </nav>

    {/* <!-- INTRODUCTION --> */}
    <div className="flex  flex-col items-center mt-20" id="home">
        <p className="text-white font-semibold mb-6">Hello I am</p>
        <h1 className="text-5xl text-white font-bold mb-5">Amit Kumar</h1>
        <p className="text-xl text-white">A Fronted End Student </p>
    </div>

    {/* <!-- DOWNLOAD AND CV --> */}

    <div className="flex justify-center gap-4 mt-11">

    <a href="https://drive.google.com/file/d/1CorUanL5I808xvNZB87gGSZGdZiLaSY7/view?usp=sharing" target="blank" className='bg-blue-500 px-3 py-2 rounded-lg text-2xl text-white'>DownLoad CV</a>

                 
                    
   
                </div>
    {/* <!-- 
 photo and side bar --> */}
    <div className="flex justify-center mt-20">
        {/* <div>
        <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YgKwlfsBW5-RfbtrIHNmx9Dl5UWf-dJ_wg&s" alt=""  width="30" height="30" className='rounded-lg'/></a>
        </div> */}
        
        <div>
        <img src="https://i.ibb.co/TrSpQ4M/IMG-20230420-211734-369.jpg" alt="" width="200px" height="150px" className="rounded-b-lg rounded-t-3xl rounded-l-2xl" />
        </div>
        
    </div>

    {/* <!-- about me head --> */}
    <div className="flex flex-col items-center mt-20" id="about">
        <p className="text-gray-500">Get to Know</p>
        <h1 className="text-blue-400 text-4xl font-semibold">About me</h1>
    </div>

    {/* <!-- about details --> */}

    <div className=" flex flex-col items-center  justify-center mt-7  gap-8 md:flex-row">
        <div className=" flex items-center">
        <img src="https://i.ibb.co/TrSpQ4M/IMG-20230420-211734-369.jpg" alt="" width="200px" height="150px"
                            className="rounded-b-lg rounded-t-3xl rounded-l-2xl" />
        </div>
        <div className="w-5/6 px-10 py-20 text-white text-xl h-auto text-justify md:w-1/2">
            <p>
            Recent graduate with a Bachelor' degree in Science (Mathematics) from Rakesh P.G. College, Pilani (Rajasthan). Strong problem-solving abilities and currently developing skills as a front-end developer.
            </p>
          
       </div>
    </div>

    {/* <!-- worked skils head --> */}
    <div className="" id="skill">
        <h5 className="text-center text-gray-700">I have worked on these</h5>
        <h2 className="text-center text-blue-500 text-3xl font-semibold mb-14">Skills</h2>
        <div className="grid gap-5 grid-cols-1 items-center justify-items-center md:grid-cols-2">
            <div className="w-11/12 h-full bg-slate-500 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400 sm:w-4/5">
                <h1 className="text-blue-700 mt-5 text-2xl font-semibold text-center">
                    Front End Development</h1>
                <div className="grid grid-cols-2 gap-9 text-white font-semibold p-7 sm:p-20">
                    <li>HTML5</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React JS</li>
                     <li>TailWind CSS</li>
                </div>
            </div>

            
        </div>


    </div>

      {/* <!-- qualification --> */}
      <div className='mt-10  border-x-black w-2/3 mx-auto ' id="qualifications">
                    <div className='text-gray-500 font-semibold text-xl'>My Personal Journey</div>
                    <h1 className='text-2xl font-bold text-white sm:text-3xl sm:text-red-900'>Education</h1>
                    <div className= " flex flex-col mt-10 text-white sm: relative h-52 gap-10 sm:block">
                        <div className="sm:absolute sm:left-0 sm:top-0">
                            <h1 className='text-xl font-semibold sm:text-2xl sm:font-bold'>Bachelor of Science</h1>
                            <h2 className='text-xl font-semibold sm:text-2xl sm:font-bold'>Rakesh P.G College</h2>
                            <h3 className='text-xl  text-gray-500 font-semibold sm:text-2xl sm:font-bold'>2020-2024</h3>
                            
                        </div>
                        <div className="sm:absolute sm:bottom-0 sm:right-0">
                            <h1 className='text-xl font-semibold sm:text-2xl sm:font-bold'>Higher Senior Secondary</h1>
                            <h2 className='text-xl font-semibold sm:text-2xl sm:font-bold' >Jeeveni International School</h2>
                            <h3 className='text-gray-500'>2017-2018</h3>
                        </div>
                    </div>
                </div>


    {/* <!-- Projects --> */}

    <div className="mt-44 h-auto" id="projects">
                    <div className="text-center">
                        <h4 className="text-gray-400 font-normal">My Recent Works</h4>
                        <h1 className="text-blue-500 text-3xl font-bold">Projects</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="w-11/12 mx-auto my-10 bg-blue-900 p-8 rounded-lg hover:bg-transparent hover:border-2 border-blue-400 sm:p-16 sm:w-4/5">
                            <h1 className="text-center text-white font-bold text-2xl mb-8  ">My PortFolio</h1>
                            <p className="text-white text-justify font-medium">
                            Created a personal portfolio website using HTML, CSS, Tailwind, and ReactJS to showcase skills and qualifications. The site features detailed project descriptions, a professional bio, and a responsive design for optimal viewing across devices. Utilized modern web development practices to highlight technical expertise and creative design.
                            </p>
                        </div>

                        <div className="w-11/12 flex flex-col  gap-y-10 mx-auto my-10 bg-blue-900 p-8 rounded-lg hover:bg-transparent hover:border-2 border-blue-400  sm:p-16 sm:w-4/5">
                            <h1 className="text-center text-white font-bold text-2xl  ">Weather App</h1>
                            <p className="text-white text-justify font-medium">
                            Developed a dynamic weather website using HTML, CSS, and JavaScript, showcasing real-time weather data integration. The site features an intuitive user interface with responsive design for seamless experience across devices. Implemented API calls for accurate, up-to-date weather information and interactive elements to enhance user engagement
                            </p>
                            <a href="https://weathe-rapp.netlify.app"  target='__blank' className="text-2xl text-white bg-blue-500 px-4  py-2 rounded-md">View Site</a>

                        </div>

                        <div className="w-11/12 flex flex-col  gap-y-10 mx-auto my-10 bg-blue-900 p-8 rounded-lg hover:bg-transparent hover:border-2 border-blue-400 
                        sm:p-16 sm:w-4/5 ">
                            <h1 className="text-center text-white font-bold text-2xl  ">Ecommerce Store</h1>
                            <p className="text-white text-justify font-medium">
                            Developed an eCommerce store using HTML, CSS, Tailwind, and ReactJS, featuring a comprehensive product display and efficient cart management. Leveraged React for robust state handling and data management to ensure a seamless shopping experience. Designed an intuitive, responsive user interface with Tailwind for modern styling.
                            </p>
                            <a href="https://ecommestore.netlify.app" target='__blank' className="text-2xl text-white bg-blue-500 px-4  py-2 rounded-md">View Site</a>

                        </div>

                        <div className="w-11/12 flex flex-col  gap-y-10 mx-auto my-10 bg-blue-900 p-8 rounded-lg hover:bg-transparent hover:border-2 border-blue-400 
                        sm:p-16 sm:w-4/5 ">
                            <h1 className="text-center text-white font-bold text-2xl  ">Blog App</h1>
                            <p className="text-white text-justify font-medium">
                            I built a modern blog app using React.js, designed for optimal performance and user experience. It features a sleek interface, responsive design, and integrates a Content Management System (CMS) for seamless post creation and management. This app provides an easy-to-use platform for creating and sharing engaging blog content.
                            </p>
                            <a href="https://blogssimple.netlify.app/" target='__blank' className="text-2xl text-white bg-blue-500 px-4  py-2 rounded-md">View Site</a>

                        </div>


                       

                    </div>
                </div>

    {/* <!-- get in TOUCH --> */}

    <div className="text-center mt-12 flex justify-center flex-col contact" id="contact">
        <div>
        <h4 className="text-grey-400">Get in Touch</h4>
        <h2 className="text-blue-400 font-bold text-2xl">Contact me</h2>

         </div>

        <div className="mt-20 grid grid-cols-1 gap-y-6">
            <div className="bg-blue-400 w-3/4 md:w-3/5 m-auto flex flex-col items-center p-10 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400">
                <img src="https://i.ibb.co/RgKNJbb/emial.png" alt="" width="30px" height="30px" className="rounded-full"/>
                <h2 className="text-white text-xl font-semibold">Email</h2>
                <h2 className="text-white font-bold text-xs md:text-2xl">amitkverma551@gmail.com</h2>
            </div>

            

            <div className="bg-blue-400 w-3/4  md:w-3/5 m-auto flex flex-col items-center p-10 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400">
                <img src="https://i.ibb.co/8B2QNX6/call.jpg" alt="" width="30px" height="30px" className="rounded-full"/>
                <h2 className="text-white text-xl font-semibold">Call</h2>
                <h2 className="text-white font-bold text-xs md:text-2xl">9461240856</h2>
            </div>



        </div>
    </div>

    {/* <!-- footer --> */}

    <footer className='bg-violet-500 text-white p-10 gap-2 mt-10 rounded-md'>
                    <h1  className='text-2xl font-bold'>Amit Kumar</h1>
                    <div className='flex flex-wrap justify-around mt-4  gap-4 text-2xl'>
                    <a href="#home">Home </a>
                    <a href="#about">About </a>
                    <a href="#skill">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#qualifications"> Qualifications</a>
                    <a href="#contact">Contact</a>
                    </div>
                </footer>



    </div>
  )
}

export default Home
