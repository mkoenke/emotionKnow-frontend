import M from "materialize-css/dist/js/materialize.min.js"
import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { logIn } from "../Redux/actions"
import LoginModal from "./LoginModal"
import SideNav from "./SideNav"

class NavBar extends React.Component {
  state = {
    modalView: false,
  }
  componentDidMount() {
    this.props.submitHandler(undefined)
    let sidenav = document.querySelector("#slide-out")
    M.Sidenav.init(sidenav, {})
  }

  handleLoginClick = () => {
    console.log("Login clicked")
    this.setState({ modalView: !this.state.modalView })
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
                <div onClick={this.handleLoginClick}>Log In</div>
                {this.state.modalView && (
                  <LoginModal handleLoginClick={this.handleLoginClick} />
                )}
              </li>
            </ul>
          </div>
        </nav>
        <SideNav />
      </>
    )
  }
}

const mdp = (dispatch) => ({
  submitHandler: (userObj) => dispatch(logIn(userObj)),
})

export default connect(null, mdp)(NavBar)
