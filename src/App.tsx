import './App.css';
import ThemeProvider from './components/context/ThemeProvider';
import UserCtx from './components/context/User';
import { UserContextProvider } from './components/context/UserProvider';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ThemeProvider>
          <DomRef />
          <MutableRef />
        </ThemeProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
