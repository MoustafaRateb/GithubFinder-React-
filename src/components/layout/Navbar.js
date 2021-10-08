import React from 'react'
import PropTypes  from 'prop-types'
const Navbar = ({icon,title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}></i> {title}
                </h1>
                <form className="text-center">
                    <button   className="btn btn-sm btn-toolbar btn-success">
                    <i class="fas fa-arrow-alt-circle-left"></i>
                    </button>
                    <button className="btn btn-sm btn-toolbar btn-success">
                    <i class="fas fa-arrow-alt-circle-right"></i>
                    </button>
                </form>
            </nav>
        )
}
Navbar.defaultProps = {
    title:"Github Finder",
    icon:"fab fa-github"
  }

  Navbar.propTypes = {
      title:PropTypes.string.isRequired,
      icon:PropTypes.string.isRequired
  }
export default Navbar
