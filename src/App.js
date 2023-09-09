import './App.css';
import { Router } from './front/component/routing/Router';
import { LanguageContextProvider } from './front/service/LanguageContextProvider.js';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Router />  
      </LanguageContextProvider>
    </div>
  );
}

export default App;
