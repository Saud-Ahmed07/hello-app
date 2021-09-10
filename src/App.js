import logo from './logo.svg';
import './App.css';
import test from './Test.json'

function App() {
  return (
    <div className="Ali's Rehabilitation">
    <header>
      Welcome to T-Levels
    </header>
    <body>
    {test.map(({Title,Description})=>(<div>{Title} - {Description}</div>))}  
    </body> 
    <footer></footer>

    </div>
  );
}

export default App;

