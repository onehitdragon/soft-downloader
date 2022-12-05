import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { getAllCategoryThunk } from './feature/mainMenu/mainMenuSlice';
import { getNewestViewingSoft } from './feature/home/homeSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [mainMenuLoading, setMainMenuLoading] = useState(true);
  const [slideBarLoading, setSlideBarLoading] = useState(true);

  useEffect(() => {
    dispatch<any>(getAllCategoryThunk(() => {
      setMainMenuLoading(false);
    }));
    dispatch<any>(getNewestViewingSoft(() => {
      setSlideBarLoading(false);
    }));
  }, [dispatch]);

  useEffect(() => {
    if(mainMenuLoading && slideBarLoading){
      setLoading(false);
    }
  }, [mainMenuLoading, slideBarLoading]);

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
