import React from 'react';
import '../style/Home.css';
import { useStateValue } from '../contexts/StateProvider';

const Home = () => {
    const [{ user }] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <h2>Welcome {user?.email}</h2>
        <img src="https://user-images.githubusercontent.com/73184313/207704192-3bad1fd2-0399-4b5c-a90e-8d4d9ed9dab3.png"
          alt="social messgenger logo" />
      </div>
    </div>
  )
};

export default Home;
