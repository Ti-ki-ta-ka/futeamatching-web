import TeamDetailContainer from "../components/TeamDetailContainer";
import { useParams } from 'react-router-dom';

const TeamDetailPage = () => {
  const { teamId } = useParams();
  return (
    <div>
      <TeamDetailContainer teamId={teamId} />
    </div>
  );
};

export default TeamDetailPage;
