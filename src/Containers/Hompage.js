import M from "materialize-css/dist/js/materialize.min.js"
import React from "react"
import Background1 from "../assets/images/background1mod5.jpeg"
import Background2 from "../assets/images/background2mod5.jpeg"
import Background3 from "../assets/images/background3mod5.jpeg"
import SignUpModal from "../Components/SignUpModal"

class Homepage extends React.Component {
  componentDidMount() {
    let elems = document.querySelectorAll(".parallax")
    M.Parallax.init(elems)
  }

  handleSignUpClick = () => {
    let elem = document.querySelector(".modal")
    let instance = M.Modal.getInstance(elem)
    instance.open()
  }
  handleClose = () => {
    let elem = document.querySelector(".modal")
    let instance = M.Modal.getInstance(elem)
    instance.close()
  }

  render() {
    return (
      <>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Background1} />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header" style={{ color: "rgb(171, 218, 225)" }}>
              EmotionKnow
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
              This is a little description about the website!
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Background2} />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2
              className="header"
              style={{ color: "rgb(171, 218, 225)" }}
              //   data-target="modal1"
              //   class="btn modal-trigger"
              onClick={this.handleSignUpClick}
            >
              Sign Up!
              <SignUpModal handleClose={this.handleClose} />
            </h2>
            {/* <p className="grey-text text-darken-3 lighten-3">
              This is a little description about the website!
            </p> */}
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Background3} />
          </div>
        </div>
      </>
    )
  }
}

export default Homepage
