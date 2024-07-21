import { useEffect, useState } from "react";
import {
  getMatches
} from "../api/main";
import MainList from "./MainList";
import MainHeader from "./MainHeader";

const MainContainer = () => {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const data = await getMatches();
      setMatches(data.content); 
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div style={{ padding: '0 250px' }}>
      <MainHeader/>
      <MainList
        matches={matches} 
      />
    </div>
  );
};

export default MainContainer;