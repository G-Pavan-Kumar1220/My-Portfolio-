import React from 'react'
import {Link} from 'react-router-dom'

function Header1({handelhomePage,handelaboutPage,handelskillsPage,handelprojectsPage}) {


  return (
    <>
    <header>
        <div class="logo"  onClick={handelhomePage}><img className='header-logo' src='https://cdn-icons-png.flaticon.com/128/4440/4440953.png'></img>PAVAN KUMAR </div>

        <nav>
            <ul>
                <li><Link  onClick={handelhomePage}><img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/619/619153.png" alt="home logo" />Home</Link></li>
                <li><Link  onClick={handelaboutPage}><img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/15899/15899478.png" alt="" />About</Link></li>
                <li><Link  onClick={handelskillsPage}><img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/10262/10262344.png" alt="" />Skills</Link></li>
                <li><Link  onClick={handelprojectsPage}> <img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/4844/4844342.png" alt="" />Projects</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header1

