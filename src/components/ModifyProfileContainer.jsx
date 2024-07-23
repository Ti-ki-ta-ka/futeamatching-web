import { modifyProfileName } from "../api/users";
import ModifyProfileInput from "./ModifyProfileInput.jsx";
import { useNavigate } from 'react-router-dom';

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
    <div>
      <ModifyProfileInput modifyProfile={modifyUserProfile} />
    </div>
  );
};

export default ModifyProfileContainer;
