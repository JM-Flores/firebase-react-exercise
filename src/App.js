import CrudUser from "./components/CrudUser";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App-header">
      <SignUp />
      <SignIn />
      <CrudUser />
    </div>
  );
}

export default App;
