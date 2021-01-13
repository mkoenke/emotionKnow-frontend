import M from "materialize-css/dist/js/materialize.min.js"
import React from "react"
import { NavLink } from "react-router-dom"

class SideNav extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out")
    M.Sidenav.init(sidenav, {})
    var elems = document.querySelectorAll(".modal")
    M.Modal.init(elems)
  }

  //   componentDidMount() {
  //     var elems = document.querySelectorAll(".modal")
  //     M.Modal.init(elems)
  //   }
  render() {
    return (
      <>
        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src="images/office.jpg" />
              </div>
              <NavLink to="/">
                <img class="circle" src="images/yuna.jpg" />
              </NavLink>
              <NavLink to="/">
                <span class="white-text name">John Doe</span>
              </NavLink>
              <NavLink to="/">
                <span class="white-text email">jdandturk@gmail.com</span>
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              class="waves-effect"
              to="/webcam"
              data-target="modal1"
              class="btn modal-trigger"
            >
              Record a Video Journal
            </NavLink>
          </li>
          <li>
            <NavLink class="waves-effect" to="/">
              Second Link With Waves
            </NavLink>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader">Subheader</a>
          </li>
          <li>
            <NavLink class="waves-effect" to="/">
              Third Link With Waves
            </NavLink>
          </li>
        </ul>
      </>
    )
  }
}

export default SideNav
