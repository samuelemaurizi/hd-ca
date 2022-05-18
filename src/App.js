import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';
import FirstStep from './screens/FirstStep';
import NotFoundScreen from './screens/NotFoundScreen';

import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='firststep' element={<FirstStep />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
