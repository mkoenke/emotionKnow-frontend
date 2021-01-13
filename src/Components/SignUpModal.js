import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import React, { Component } from "react"

class SignUpModal extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  }
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start")
      },
      onOpenEnd: () => {
        console.log("Open End")
      },
      onCloseStart: () => {
        console.log("Close Start")
      },
      onCloseEnd: () => {
        console.log("Close End")
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%",
    }
    M.Modal.init(this.Modal)

    // let instance = M.Modal.getInstance(this.Modal)
    // instance.open();
    // instance.close()
    // instance.destroy();
  }
  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClose = () => {
    console.log("Close")
    this.props.handleClose()
  }
  handleSignUp = (e) => {
    console.log("Sign up")
    let parentData = {
      email: e.target.email,
    }
    fetch("https://localhost3000/parents", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parentData),
    })
      .then((response) => response.json())
      .then((returnedParentObj) => {
        console.log("Success new parent:", returnedParentObj)
        let childData = {
          username: e.target.username,
          password: e.target.password,
          parent_id: returnedParentObj.id,
        }
        fetch("https://localhost3000/children", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(childData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data)
          })
          .catch((error) => {
            console.error("Error:", error)
          })
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div
          ref={(Modal) => {
            this.Modal = Modal
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>Welcome!</h4>
            <div class="row">
              <form class="col s12" onSubmit={this.handleSignUp}>
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      required
                      id="icon_prefix"
                      type="text"
                      class="validate"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleFormChange}
                    />
                    <label for="icon_prefix">Child's Username</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">password</i>
                    <input
                      required
                      id="icon_password"
                      type="password"
                      class="validate"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleFormChange}
                    />
                    <label for="icon_password">Password</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input
                      required
                      id="icon_email"
                      type="email"
                      class="validate"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleFormChange}
                    />
                    <label for="icon_email">Parent's Email</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <a
                    className="modal-close waves-effect btn-flat"
                    onClick={this.handleSignUp}
                  >
                    Sign Up
                  </a>
                  <a
                    className="modal-close waves-effect btn-flat"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="modal-footer">
            <a
              className="modal-close waves-effect btn-flat"
              onClick={(e) => this.handleSignUp(e)}
            >
              Sign Up
            </a>
            <a
              className="modal-close waves-effect btn-flat"
              onClick={this.handleClose}
            >
              Cancel
            </a>
          </div> */}
        </div>
      </div>
    )
  }
}

export default SignUpModal
