import './App.css';
import Container from './components/Container';
import Counter from './components/state/Counter';

function App() {
  return (
    <div className="App">
      <Container styles={{ border: '2px solid red', padding: '1rem' }}>
        <Counter />
      </Container>
    </div>
  );
}

export default App;
