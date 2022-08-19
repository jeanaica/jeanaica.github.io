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

  const handleClick = (itemName, progress) => {
    setItems({
      ...items,
      [itemName]: progress
    })
  }

  return (
    <div className="flex justify-center items-center content-center h-screen">
      <div className="flex w-2/3 justify-between min-h-[500px]">
        <Container title="To do" headerColor="bg-indigo-400" data-testid="todo">
          {
            Object.entries(items)
              .filter(item => item[1]==="TODO")
              .map((item, index) => 
                <button key={index} className="border-y border-dashed px-10 py-5 last:border-b-2" onClick={() => handleClick(item[0], "DONE")}>{item[0]}</button>
            )
          }
        </Container>
        <Container title="Done" headerColor="bg-green-600" data-testid="done">
          {
            Object.entries(items)
              .filter(item => item[1]==="DONE")
              .map((item, index) => 
                <button key={index} className="border-y border-dashed px-10 py-5 last:border-b-2" onClick={() => handleClick(item[0], "TODO")}>{item[0]}</button>
            )
          }
        </Container>
      </div>
    </div>
  );
}

export default App;
