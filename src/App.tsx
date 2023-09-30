import './App.css';
import ThemeProvider from './components/context/ThemeProvider';
import UserCtx from './components/context/User';
import UserContextProvider from './components/context/UserProvider';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ThemeProvider>
          <UserCtx />
        </ThemeProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
