// test

import Logo2 from './../Utilities/Images/Logo2.png'

function Footer () {
    return(
    <>
    <footer className='flex flex-col bg-black text-white h-[250px]'>
        <div className='flex justify-center'>
        <a className="w-[300px] pt-3"><img src={Logo2} alt='Logo2'/></a>
        </div>
        <div>
            <ul className='flex justify-center pb-3 pt-3'>
                <li>
                    <a className='hover:text-red-600'href='http://localhost:3000/termsandconditions'>
                    T&C
                    </a>
                </li>
                <li className='pl-20'>
                    <a className='hover:text-red-600'href='http://localhost:3000/aboutus'>
                    About Us
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center pb-3'>
                <li>
                    <a className='hover:text-red-600'href='https://www.instagram.com/'>
                    Instagram
                    </a>
                </li>
                <li className='pl-8'>
                    <a className='hover:text-red-600'href='https://www.facebook.com/'>
                    Facebook
                    </a>
                </li>
                <li className='pl-8'>
                    <a className='hover:text-red-600'href='https://www.youtube.com/'>
                    Youtube
                    </a>
                </li>
            </ul>
        </div>
        <p className='flex flex-col text-center pt-1 text-xs'>
        © 2023. JCWD-2502 PWDK. Death Parade Festival. All Rights Reserved.
        </p>
    </footer>
    </>
    )
}

export default Footer