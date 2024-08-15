import MatchCreateInput from "./MatchCreateInput.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import MainButtonComponent from "./MainButtonComponent"

const MatchCreateContainer = () => {


  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent/>
      <MainButtonComponent/>
      <MatchCreateInput />
    </div>
  );
};

export default MatchCreateContainer;
