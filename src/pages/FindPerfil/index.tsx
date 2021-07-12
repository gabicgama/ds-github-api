import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  user: string;
};

type UserInfos = {
  html_url: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: string;
};

const FindPerfil = () => {
  const [userInfos, setUserInfos] = useState<UserInfos>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setUserInfos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setUserInfos(undefined);
        console.log(error);
      });
  };

  return (
    <div className="find-perfil-container">
      <div className="card-search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {userInfos && (
        <div className="card-result-container">
          <div className="row">
            <div className="avatar-container col-xl-auto">
              <img src={userInfos?.avatar_url} alt="[avatar]" />
            </div>
            <div className="card-info-container col-xl-auto">
              <h2>Informações</h2>
              <ResultCard title="Perfil:" description={userInfos.html_url} />
              <ResultCard
                title="Seguidores:"
                description={userInfos?.followers}
              />
              <ResultCard
                title="Localidade:"
                description={userInfos?.location}
              />
              <ResultCard title="Nome:" description={userInfos?.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindPerfil;
