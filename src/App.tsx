import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { getAllCategoryThunk } from './feature/mainMenu/mainMenuSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [mainMenuLoading, setMainMenuLoading] = useState(true);

  useEffect(() => {
    dispatch<any>(getAllCategoryThunk(() => {
      setMainMenuLoading(false);
    }))
  }, [dispatch]);

  useEffect(() => {
    if(mainMenuLoading){
      setLoading(false);
    }
  }, [mainMenuLoading]);

  return (
    <div className="App max-h-screen overflow-y-scroll"
      style={{ backgroundImage: 'url(/wall-Dying-Light-2.1.jpg)' }}>
      {
        !loading &&
        <Home />
      }
    </div>
  );
}

export default App;
