import Header from "./components/Header";

function App() {
  let user = {
    fullName: "Arjit Verma",
    job: "Trainer",
  };

  let year = 2024;

  return (
    <>
      <Header />
      <h4>User Details</h4>
      <ul>
        <li>Full Name : {user.fullName}</li>
        <li>Job : {user.job}</li>
      </ul>
      Current Year : {year}
    </>
  );
}

export default App;
