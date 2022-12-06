import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { getAllCategoryThunk } from './feature/mainMenu/mainMenuSlice';
import { getHightestViewingSoft, getListGhostWin10, getListGhostWin11, getNewestViewingSoft } from './feature/home/homeSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [mainMenuLoading, setMainMenuLoading] = useState(true);
  const [homeLoading, setHomeLoading] = useState(true);

  useEffect(() => {
    dispatch<any>(getAllCategoryThunk(() => {
      setMainMenuLoading(false);
    }));
    
    dispatch<any>(getHightestViewingSoft(() => {
      dispatch<any>(getNewestViewingSoft(() => {
        dispatch<any>(getListGhostWin11(() => {
          dispatch<any>(getListGhostWin10(() => {
            setHomeLoading(false);
          }));
        }));
      }));
    }));
  }, [dispatch]);

  useEffect(() => {
    if(!mainMenuLoading && !homeLoading){
      setLoading(false);
    }
  }, [mainMenuLoading, homeLoading]);

  return (
    <div className="App max-h-screen overflow-y-scroll"
      style={{ backgroundImage: 'url(/bg/1.jpg)' }}>
      {
        !loading &&
        <Home />
      }
    </div>
  );
}

export default App;
