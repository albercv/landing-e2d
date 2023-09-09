import './App.css';
import { Router } from './front/component/routing/Router';
import { ScreenSizeContextProvider } from './front/service/ScreenSizeContextProvider';

function App() {
  return (
    <div className="App">
      <ScreenSizeContextProvider>
        <Router />  
      </ScreenSizeContextProvider>
    </div>
  );
}

export default App;
