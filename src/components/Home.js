import React from 'react';
import './Home.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Home = ({ dog, fetchDog }) => {
  return (
    <div className="mainContainer">
      <p className="mainText">Oi!</p>
      <p className="subText">
        Clique no botão abaixo para ver um cachorro fofo
      </p>
      <button onClick={event => fetchDog()} className="button">
        <p className="buttonText">Quero um cachorro</p>
      </button>
      {dog.loading ? (
        <div />
      ) : dog.url === '' ? (
        <div />
      ) : (
        <img src={dog.url} className="image" alt="" />
      )}
    </div>
  );
};

export default Home;
