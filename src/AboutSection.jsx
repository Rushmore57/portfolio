import profile from '../src/assets/customer1.jpeg'
import nodes from '../src/assets/nodejs.svg'
import react from '../src/assets/react2.svg'
import html from '../src/assets/html.svg'
import css from '../src/assets/css.svg'
import java from '../src/assets/java.svg'
import python from '../src/assets/python.svg'
import javascript from '../src/assets/javascript.svg'
import instagram from "../src/assets/instagram.svg";
import facebook from "../src/assets/facebook.svg";
import twitter from "../src/assets/twitter.svg";
import linkedin from "../src/assets/linkedin.svg";
import github from "../src/assets/github.svg";
import classNames from 'classnames'
import Nav from './Nav'
import { useState } from 'react'


const AboutSection = () => {
    const links =[facebook,twitter,instagram,linkedin,github]
    return (
        <section className=' w-3/4 h-screen max-lg:w-full  '>
            <Nav/>
            <div className=' w-full h-2/4 flex justify-evenly bg-purple-50 max-sm:bg-purple-100 '>
                <div className=' w-2/4 h-full max-lg:w-full max-sm:justify-center max-sm:flex' >
                    <div className=' lg:px-24 lg:py-12 md:px-24 md:py-12 max-sm:m-0  w-fit h-full '>
                        <div className='h-2/4 w-full p-2 hidden max-sm:block'>
                            <img src={profile} alt="profile picture" className='w-full h-full rounded-lg' />
                        </div>
                        <h1 className=' font-bold text-3xl max-sm:text-xl  max-sm:text-center max-sm:p-2 max-lg:px-4 max-lg:py-2'>Rusmore Simuunza</h1>
                        <h3 className='mt-2 max-sm:text-sm max-sm:text-center max-sm:p-2 max-lg:px-4 max-lg:py-2'>Junior Software Developer</h3>
                        <p className=' max-sm:hidden max-lg:px-4 max-lg:py-2 text-sm py-4'>
                            Hi,welcome to my portfolio! I am a 
                            Junior Software Developer specialised 
                            in web Technologies and data Analysis.
                            I have two years experience in both front-
                            end and back-end development and one year 
                            experience in data-analysis with microsoft 
                            excell and python.  
                        </p>
                        <p className=' text-center text-xs p-2 hidden max-sm:block'>
                            Welcome to my portfolio!
                        </p>
                        <div className=' w-full   h-10 grid grid-cols-5 gap-2 hidden max-sm:grid '>
                            {links.map((items,index) => (<img key={items} src={items} alt={`social icons ${index}`} className='w-8 h-8 rounded-full mt-1  '></img>))}

                        </div>
                        <div className='flex justify-evenly w-full max-sm:hidden'>
                            <button className='w-2/4 bg-pink-200 rounded m-3 h-10'>View CV</button>
                            <button className='w-2/4 ring-2 ring-gray-500 rounded m-3 h-10'>View Resume</button>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 h-full flex justify-center max-lg:hidden'>
                    <div className='w-3/4 h-3/4 m-14'>
                        <img src={profile} alt="profile picture" className=' w-full h-full' />
                    </div>
                </div>
            </div>
            <div className='w-full h-2/4 '>
                <div className='w-full h-1/4 max-lg:hidden'>
                    <h1 className=' px-4 border-l-8 border-green-600 text-3xl font-bold ml-14 mt-2 mb-0 '>
                        What i Do
                    </h1>
                </div>
                <div className='flex justify-center'>
                <div className='flex justify-around w-full h-3/4 max-lg:grid-cols-2 max-lg:grid max-sm:block'>
                    <div>
                        <h1 className='text-center py-4 text-xl font-bold  text-green-700'>My Stack</h1>
                    </div>
                <div className='h-full w-1/4 ml-14 max-lg:ml-5 max-sm:ml-0 max-sm:px-24 max-sm:py-12 max-lg:w-full max-lg:px-8 max-lg:py-4 '>
                    <img src={nodes} alt="logo" className='h-10 w-10' />
                    <h1 className=' text-xl font-bold'>Node.JS</h1>
                    <p className='p-2'>
                        Node.js is a powerfull back-end or server 
                        side tool. I love node.js because of its flexibilitey
                        making work easier and more efficient. To add on to 
                        its 

                    </p>
                </div>
                <div className=' h-full w-1/4 ml-5 max-lg:ml-5 max-sm:ml-0 max-sm:px-24 max-sm:py-12 max-lg:w-full max-lg:px-8 max-lg:py-4'>
                    <div className='w-full flex justify-normal'>
                    <img src={html} alt="logo" className='h-10 w-10' />
                    <img src={css} alt="logo" className='h-10 w-10' />
                    <img src={react} alt="logo" className='h-10 w-10 ' />
                    </div>
                    <h1 className=' text-xl font-bold'>HTM,CSS,React</h1>
                    <p className='p-2'>
                        HTML and CSS are web technologies used for 
                        structuring and styling websites respectivly. 
                        React is a javascript
                        framwork that allows you to use HTML and CSS 
                        in a Javascript file. it is popular for its 
                        component reusability
                    </p>
                </div>
                <div className='h-full w-1/4 ml-5  max-lg:ml-5 max-sm:ml-0 max-sm:px-24 max-sm:py-12 max-lg:w-full max-lg:px-8 max-lg:py-4'>
                <img src={javascript} alt="logo" className='h-10 w-10' />
                <h1 className=' text-xl font-bold'>Vanilla JavaScript</h1>
                <p className='p-2'>
                        Javascript is a front-end programming 
                        language used to make web applications 
                        more interactive and less static.
                        It is one of my favorite programming 
                        languages in my arsenal because of its 
                        readability and easy to understand syntax. 
                </p>
                </div>
                <div className='h-full w-1/4 ml-5  max-lg:ml-5 max-sm:ml-0 max-sm:px-24 max-sm:py-12 max-lg:w-full max-lg:px-8 max-lg:py-4'>
                    <div className='w-full flex justify-normal'>
                    <img src={python} alt="logo" className='h-10 w-10' />
                    <img src={java} alt="logo" className='h-10 w-10' />
                    </div>
                    <h1 className=' text-xl font-bold'>Java,Python</h1>
                    <p className='p-2'>
                        bfbfb fbffbfbfbf fhfbfhf hfhfhf fhfhfhf
                        lflf fkfk fkfkmc kd kfkkd fkfkkdk fkfkd 
                        kfkfm kdkd fkdkdkfkd kfddkdk fkfmdjf fk
                        jfjfk kfkdfjfdk kf 
                    </p>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection