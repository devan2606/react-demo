
import './App.css';

import Counter from './redux/incrementDemo/Counter'

import Contextapi from './ContextApi/App'

import View from './redux/api/View'

import ThunkView from './Thunk/ThunkView'

import './Thunk/lodder/Lodder.css'

import {Main} from './ContextApiFC/Main'

import TodosContextProvider from './ContextApiFC/FirstComponent'



function App() {
  return (
    <div className="appContainer">


      {/* simple Api Call using redux */}
      {/* <View/> */}

      {/* redux demo---counter */}
      {/* <Counter/> */}


      {/* Api Call using redux Thunk */}
      {/* <ThunkView/> */}

     {/* Context Api with class Component */}
     {/* <Contextapi/> */}


     {/* Context Api with Function Component */}
     {/* <TodosContextProvider>
     
     <Main/>
     </TodosContextProvider> */}
     
    </div>
  );
}

export default App;
