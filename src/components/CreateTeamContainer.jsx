import { postTeam } from "../api/team";
import CreateTeamInput from "./CreateTeamInput.jsx";
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const CreateTeamContainer = () => {
  const navigate = useNavigate();

  const createTeam = async (createTeamRequest) => {
    try {
      const data = await postTeam(createTeamRequest);
      navigate('/main');
    } catch (error) {
      console.error('프로필 수정 실패:', error);
      alert(error.response?.data?.message); 
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
        <HeaderComponent />
        <MainButtonComponent/>
      <CreateTeamInput createTeam={createTeam} />
    </div>
  );
};

export default CreateTeamContainer;
