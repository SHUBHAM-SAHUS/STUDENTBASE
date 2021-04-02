import Navbar from "./COMPONENT/Navbar"
import "./App.css"
import { Student } from "./COMPONENT/Student"
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Students from "./COMPONENT/Students";
import { StudentForm } from "./COMPONENT/StudentForm";
import {Provider} from "react-redux"; 
import store ,{rrfProps}from "./store";
import{ReactReduxFirebaseProvider} from "react-redux-firebase";
import {useFirestoreConnect} from "react-redux-firebase"

export const App=()=>{

  useFirestoreConnect([
    {
  collection:"student",
  }
]);
  
  return(
    <>
  <Navbar/>
  <Provider store={store}>
 <ReactReduxFirebaseProvider {...rrfProps}>
 <Router>
    <Switch>
      <Route  exact path="/" >
         <Student/>
      </Route>
      <Route  exact path="/students/:id" >
         <Students/>
      </Route>

      <Route  exact path="/studentsform/:id?" >
         <StudentForm/>
      </Route>

    </Switch>
  

  </Router>

 </ReactReduxFirebaseProvider>
  </Provider>


    </>
  )
}

