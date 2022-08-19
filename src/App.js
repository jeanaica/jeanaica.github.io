import { useState } from 'react';
import './App.css';
import Container from './components/Container';

function App() {
  const [items, setItems] = useState({
    "Make coffee": "TODO",
    "Read books": "DONE",
    "Do homework": "TODO",
    "Exercise": "TODO",
  })
// [[Makecoffee, todo], ....]
  return (
    <div className=" flex ">
      <Container data-testid="todo">
        {Object.entries(items).filter(item =>
          item[1]==="TODO").map((item, index) => <div key={index}> {item[0]}</div>)}
      </Container>
      <Container />
    </div>
  );
}

export default App;
