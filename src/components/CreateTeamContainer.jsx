import CreateTeamInput from "./CreateTeamInput.jsx";
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const CreateTeamContainer = () => {



  return (
    <div style={{ padding: '0 250px' }}>
        <HeaderComponent />
        <MainButtonComponent/>
      <CreateTeamInput />
    </div>
  );
};

export default CreateTeamContainer;
