import './styles.css';
import ResultCard from '../ResultCard';

type Props = {
  perfil: string;
  avatar: string;
  name: string;
  location: string;
  followers: string;
};

const ResultBox = ({ perfil, avatar, name, location, followers }: Props) => {
  return (
    <div className="card-result-container">
      <div className="row">
        <div className="avatar-container col-xl-auto">
          <img src={avatar} alt="[avatar]" />
        </div>
        <div className="card-info-container col-xl-auto">
          <h2>Informações</h2>(
          <>
            <ResultCard title="Perfil:" description={perfil} />
            <ResultCard title="Seguidores:" description={followers} />
            <ResultCard title="Localidade:" description={location} />
            <ResultCard title="Nome:" description={name} />
          </>
          )
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
