import { LOG_IN } from "./actionTypes"

export const logIn = (userObj) => {
  return function (dispatch) {
    //BEFORE login fetch, check if the userObj being passed is undefined.
    //If so, get the user data from local storage IF there is user data in local storage.
    //If there is no user data in local storage, log in fetch will run.
    if (userObj === undefined) {
      const userDataStr = localStorage.getItem("USER_DATA")
      //user data must be parsed back to JSON
      let userDataObj = JSON.parse(userDataStr)
      if (userDataObj) {
        console.log("user data from local storage", userDataObj)
        //payload will be sent from local storage to reducers
        dispatch({ type: LOG_IN, payload: userDataObj })
      }
      return
    }

    //normal log in fetch
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application.json",
      },
      body: JSON.stringify(userObj),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.id) {
          console.log("found user", data["user_name"])
          //If user was fetched succesfully, user data will be added to local storage
          localStorage.setItem("USER_DATA", JSON.stringify(data))
          dispatch({ type: LOG_IN, payload: data })
        } else {
          console.log("user not found")
          window.alert("Wrong Username or Password Please Try Again")
        }
      })
      .catch(console.log)
  }
}
