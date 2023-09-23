import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

function App() {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleClick = (id: number) => (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log(id);
  };

  return (
    <div className="App">
      <Container styles={{ border: '2px solid red', padding: '1rem' }}>
        <Button handleClick={() => handleClick(1)} id={1} />
        <Input value={value} handleChange={handleChange} />
      </Container>
    </div>
  );
}

export default App;
