import './App.css';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';

function App() {
  return (
    <div className="App">
      <Container styles={{ border: '2px solid red', padding: '1rem' }}>
        <LoggedIn />
      </Container>
    </div>
  );
}

export default App;
