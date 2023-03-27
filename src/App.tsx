import "./App.css";

function App() {
  async function fetchData() {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();

    console.log("data", data);
  }

  return <div className="App"></div>;
}

export default App;
