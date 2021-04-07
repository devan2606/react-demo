import './App.css';
import MainRouting from './routers/MainRouting'
import axios from "axios";

axios.defaults.baseURL='http://localhost:2002'

function App() {
  return (
    <div>
      <MainRouting />
    </div>
  );
}

export default App;
