import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <>
      <main className="container">
        <Title />
        <form>
          <Input placeholder="Enter Your Name" inputClassname="formInput" />
          <Input placeholder="Enter Your Name" inputClassname="formInput" />

          <Button
            buttonValue="Submit"
            // this will make the dynamic changes on Button
            varient="primary"
            typeOfButton="button"
          />
        </form>
      </main>
    </>
  );
}

export default App;
