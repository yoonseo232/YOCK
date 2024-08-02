import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './componets/title';

function App() {
   return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Title />} />
          </Routes>
      </Router>
    </div>
   );
}

export default App;
