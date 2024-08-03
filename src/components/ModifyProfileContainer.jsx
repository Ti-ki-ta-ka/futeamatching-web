import { modifyProfileName } from "../api/users";
import HeaderComponent from "./HeaderComponent.jsx";
import ModifyProfileInput from "./ModifyProfileInput.jsx";
import { useNavigate } from 'react-router-dom';
import MainButtonComponent from "./MainButtonComponent"
const ModifyProfileContainer = () => {
  const navigate = useNavigate();

  const modifyUserProfile = async (modifyProfileRequest) => {
    try {
      const data = await modifyProfileName(modifyProfileRequest);
      navigate('/main');
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent/>
      <MainButtonComponent/>
      <ModifyProfileInput modifyProfile={modifyUserProfile} />
    </div>
  );
};

export default ModifyProfileContainer;
