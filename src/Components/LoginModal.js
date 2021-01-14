import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import React, { Component } from "react"

class LogInModal extends Component {
  state = {
    username: "",
    password: "",
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
    // let elem = document.querySelector(".modal")
    let instance = M.Modal.getInstance(this.Modal)
    instance.open()

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
    this.props.handleLoginClick()
    let instance = M.Modal.getInstance(this.Modal)
    instance.close()
  }
  handleLogIn = (e) => {
    console.log("Log In")
    this.props.handleLoginClick()
    /// fetch child from db
    //fetch child's journal entries from db
    //fetch child's reports from db
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
          <div
            className="modal-content"
            style={{ color: "rgb(171, 218, 225)" }}
          >
            <h4>Welcome!</h4>
            <div class="row">
              <form class="col s12" onSubmit={this.handleLogIn}>
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
                </div>
                <div className="modal-footer">
                  <button
                    className="modal-close waves-effect btn-flat"
                    onClick={this.handleLogIn}
                  >
                    Log In
                  </button>
                  <button
                    className="modal-close waves-effect btn-flat"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LogInModal
