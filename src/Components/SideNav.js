import M from "materialize-css/dist/js/materialize.min.js"
import React from "react"
import { NavLink } from "react-router-dom"
// import profileBackground from "../assets/images/profilebackground.jpeg"
// import profileBackground from "../assets/images/profileBackground2.jpeg"
import profileBackground from "../assets/images/profilebackground3.jpeg"

class SideNav extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out")
    M.Sidenav.init(sidenav, {})
  }
  closeSideNav = () => {
    let elem = document.querySelector("#slide-out")
    let instance = M.Sidenav.getInstance(elem)
    instance.close()
  }

  render() {
    return (
      <>
        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src={profileBackground} />
              </div>
              {/* <NavLink to="/"> */}
              <img class="circle" src="" />
              {/* </NavLink> */}
              {/* <NavLink to="/"> */}
              <span class="white-text name">Welcome</span>
              {/* </NavLink> */}
              {/* <NavLink to="/"> */}
              <span class="white-text email">*Username*</span>
              {/* </NavLink> */}
            </div>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader">Video Journal</a>
          </li>
          <li onClick={this.closeSideNav}>
            <NavLink className="waves-effect" to="/webcam">
              Record a Video Journal
            </NavLink>
          </li>
          <li onClick={this.closeSideNav}>
            <NavLink class="waves-effect" to="/videos">
              Video Gallery
            </NavLink>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader">Sentiment Report</a>
          </li>
          <li onClick={this.closeSideNav}>
            <NavLink class="waves-effect" to="/reports">
              Sentiment Report Gallery
            </NavLink>
          </li>
        </ul>
      </>
    )
  }
}

export default SideNav
