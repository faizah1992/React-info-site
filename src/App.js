import logo from './logo.svg';
import reactimage from './logo'
import './App.css';


function App() {
  return (
    <div className="App">
      <img src={reactimage} alt="react logo"/>
      <h1>
        Fun facts about React
      </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K starts on Githuv</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
