import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from '../src/utils/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Head />
          <Routes>
            {/* Parent Route */}
            <Route path="/" element={<Body />}>
              {/* Child Routes */}
              <Route index element={<MainContainer />} /> 
              <Route path="watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
