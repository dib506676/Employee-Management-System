import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dasboard/EmployeeDashboard";
import AdminDashboard from "./component/Dasboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  const authData = useContext(AuthContext);
  if(!authData){
    setLocalStorage();
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogIn = (email, password) => {
    if (authData) {
      const admin = authData.admin.find(
        (E) => email == E.email && E.password == password
      );
      if (admin) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
        setUser("admin");
        setLoggedInUserData(admin);
      }
      const employee = authData.employees.find(
        (E) => email == E.email && E.password == password
      );
      if (employee) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setLoggedInUserData(employee);
        setUser("employee");
      }
    } else {
      console.log("invelid");
    }
  };
  // console.log(loggedInUserData.data);

  return (
    <>
      {!user ? <Login handleLogIn={handleLogIn} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
