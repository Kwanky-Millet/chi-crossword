import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/login/login';
import EditCrossword from './pages/editCrossword/editCrossword';
import CrosswordPage from './pages/crossword/crosswordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Login />}
        />

        <Route
          path='/crossword'
          element={<CrosswordPage />}
        />

        <Route
          path='/editCrossword'
          element={<EditCrossword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
