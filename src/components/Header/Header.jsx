import React,{useRef, useEffect} from 'react'
import { Container, Row } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import "../../assets/images/logo.png"
import logo from '../../assets/images/c_logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './header.css';


const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/timetable',
    display: 'Timetable'
  },
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFun = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFun()
    return window.removeEventListener('scroll', stickyHeaderFun)
  })
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_ _wrapper d-flex align-items-center justify-content-between">

            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass =>
                    navClass.isActive? "active_link" :""
                      }
                      >
                    {item.display}
                  </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          <div className='nav_right d-flex align-items-center gap-4'>
            <div className='nav_btns d-flex align-items-center gap-4'>
              <Button className='btn secondary_btn'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button variant="primary" className='btn'>
                <Link to='/register'>Register</Link>
              </Button>
            </div>
            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>



        </div>
      </Row >
    </Container >
    </header >
  );
};

export default Header