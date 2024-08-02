import { modifyProfilePassword } from "../api/users";
import HeaderComponent from "./HeaderComponent.jsx";
import ModifyPasswordInput from "./ModifyPasswordInput.jsx";
import { useNavigate } from 'react-router-dom';
import MainButtonComponent from "./MainButtonComponent"
const ModifyPasswordContainer = () => {
  const navigate = useNavigate();

  const modifyUserPassword = async (modifyPasswordRequest) => {
    try {
      const data = await modifyProfilePassword(modifyPasswordRequest);
      navigate('/main');
    } catch (error) {
      console.error('비밀번호 변경 실패:', error.response?.data?.message);
      alert(error.response?.data?.message); 
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent/>
      <MainButtonComponent/>
      <ModifyPasswordInput modifyPassword={modifyUserPassword} />
    </div>
  );
};

export default ModifyPasswordContainer;
