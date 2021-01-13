import M from "materialize-css/dist/js/materialize.min.js"
import React from "react"
import { NavLink } from "react-router-dom"
import SideNav from "./SideNav"

class NavBar extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out")
    M.Sidenav.init(sidenav, {})
  }

  render() {
    return (
      <>
        <nav style={{ backgroundColor: "rgb(171, 218, 225)" }}>
          <div className="container">
            <NavLink
              to="/"
              data-target="slide-out"
              class="sidenav-trigger show-on-large"
            >
              <i class="material-icons">menu</i>
            </NavLink>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Log In</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <SideNav />
      </>
    )
  }
}

export default NavBar
