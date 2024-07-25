import { createMatch } from "../api/main";
import MatchCreateInput from "./MatchCreateInput.jsx";
import { useNavigate } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent.jsx";

const MatchCreateContainer = () => {
  const navigate = useNavigate();

  const postNewMatch = async (createMatchRequest) => {
    try {
      const data = await createMatch(createMatchRequest);
      console.log(data) 
      navigate('/main');
    } catch (error) {
      console.error('매치 생성 에러:', error);
      alert(error.response?.data?.message); 
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent/>
      <MatchCreateInput createMatch={postNewMatch} />
    </div>
  );
};

export default MatchCreateContainer;
