import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Tasks } from './Components/Tasks';
import { NavigationBar } from './Components/NavigationBar';
import { Home } from './Components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/data">
          <Route index element={<h1>Data</h1>} />
          <Route path=":id" element={<h1>Data for ID</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
