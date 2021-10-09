import React from 'react'
import PropTypes  from 'prop-types'
const Navbar = ({icon,title,nextPage}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}></i> {title}
                </h1>
                <form className="text-center">
                    <button   className="btn  btn-toolbar btn-primary" onClick = {nextPage}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                    </button>
                    <button className="btn  btn-toolbar btn-primary" onClick = {nextPage}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    </button>
                </form>
            </nav>
        )
}
Navbar.defaultProps = {
    title:"Github Finder",
    icon:"fab fa-github",
    nextPage:()=>{}
  }

  Navbar.propTypes = {
      title:PropTypes.string.isRequired,
      icon:PropTypes.string.isRequired,
      nextPage:PropTypes.func.isRequired
  }
export default Navbar
