import classNames from 'classnames';
import profile from '../src/assets/about.svg'
import hamburger from '../src/assets/hamburger.svg'
import { useState } from 'react';
const Nav = () => {
    const [isSelected,setIsSelected] = useState(false);
    return (
        <>
        <header className='hidden bg-purple-100 py-5  px-5 max-lg:block'>
            <nav className='  max-w-[1440px] m-0 flex justify-between items-center'>
                <a href="./">
                    <img src={profile} alt="logo" width={25} height={25} className={classNames('block',{'hidden': isSelected})} />
                </a>
                <div>
                    <img
                     src={hamburger} 
                     alt="menu" 
                     width={25} 
                     height={25}
                     onClick={() => (setIsSelected(!isSelected))}
                     className={classNames('',{' rounded-full' : isSelected})}
                     />
                </div>
                
            </nav>
            <div className='flex justify-end '>
            <div className={classNames( ' bg-purple-200 fixed  z-10 w-full h-full ',{
                'block': isSelected
            })}>
                <div className='flex justify-end p-4'>
                    <img src={profile} alt='profile' width={25} height={25} className='' />
                </div>
                    <ul className='px-24 py-12'>
                        <li className='py-4 '>About</li>
                        <li className='py-4 '>Skills</li> 
                        <li className='py-4 '>Qualifications</li>
                        <li className='py-4 '>Contacts</li>
                        <li className='py-4 '>Projects</li>

                    </ul>
            </div>
            </div>
        </header>
        </>
    )
}
export default Nav;