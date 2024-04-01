import AppHeader from "./components/AppHeader";
import LoginForm from './components/LoginForm'
function App() {

  let appName = "Orange HRM"
  let year = 2024;
  let user = {
    fullName : "Arjit verma",
    job :"Trainer"
  }
  return (
    <>
      <AppHeader />
      <LoginForm/>
      {appName} <br/>
      <p>FullName: {user.fullName}</p>
      <p>Job : {user.job}</p>
      &copy; {year}
    </>
  );
}

export default App;
