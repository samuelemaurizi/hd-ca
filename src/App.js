import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';

// COMPONENTS
import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';
import FirstStep from './screens/FirstStep';
import SecondStep from './screens/SecondStep';
import GithubUserInfo from './screens/GithubUserInfo';
import NotFoundScreen from './screens/NotFoundScreen';

import './App.css';

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/step1' element={<FirstStep />} />
            <Route path='/step2' element={<SecondStep />} />
            <Route path='/step3' element={<GithubUserInfo />} />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
