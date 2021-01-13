import M from "materialize-css/dist/js/materialize.min.js"
import React from "react"

class NavBar extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out")
    M.Sidenav.init(sidenav, {})
  }

  //   document.addEventListener('DOMContentLoaded', function() {
  //     var elems = document.querySelectorAll('.sidenav');
  //     var instances = M.Sidenav.init(elems, options);
  //   });
  render() {
    return (
      <>
        <nav>
          <div className="container">
            <a
              href="#"
              data-target="slide-out"
              class="sidenav-trigger show-on-large"
            >
              <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" class="sidenav">
          <li>
            <a href="#item1">Item 1</a>
          </li>
          <li>
            <a href="#item2">Item 2</a>
          </li>
          <li>
            <a href="#item3">Item 3</a>
          </li>
        </ul>
      </>
    )
  }
}

export default NavBar
