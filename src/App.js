import "materialize-css/dist/css/materialize.min.css"
import "./App.css"
import NavBar from "./Components/NavBar"
import Homepage from "./Containers/Hompage"

function App() {
  return (
    <>
      <NavBar />
      {/* <SideNav /> */}
      <Homepage />
    </>
  )
}

export default App
