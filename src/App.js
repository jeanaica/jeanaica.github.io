import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';

function App() {
  const [items, setItems] = useState({
    "Make coffee": "TODO",
    "Read books": "DONE",
    "Do homework": "TODO",
    "Exercise": "TODO",
  })

  const handleMoveClick = (itemName, progress) => {
    setItems({
      ...items,
      [itemName]: progress
    })
  }

  return (
    <div className="flex justify-center items-center content-center h-screen">
      <div className="flex justify-between w-2/3">
        <div className="min-h-[500px] w-full" data-testid="todo">
          <Container title="To do" headerColor="bg-indigo-400">
            {
              Object.entries(items)
                .filter(item => item[1]==="TODO")
                .map((item, index) => 
                  <button key={index} className="border-y border-dashed px-10 py-5 last:border-b-2" onClick={() => handleMoveClick(item[0], "DONE")}>{item[0]}</button>
              )
            }
          </Container>
        </div>
        <div className="min-h-[500px] w-full" data-testid="done">
          <Container title="Done" headerColor="bg-green-600">
            {
              Object.entries(items)
                .filter(item => item[1]==="DONE")
                .map((item, index) => 
                  <button key={index} className="border-y border-dashed px-10 py-5 last:border-b-2" onClick={() => handleMoveClick(item[0], "ARCHIVE")}>{item[0]}</button>
              )
            }
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
