import React from 'react';
import '../style/Home.css';
import { useStateValue } from '../contexts/StateProvider';

const Home = () => {
    const [{ user }] = useStateValue();

  return (
    <div className="home">
        <h1>Welcome {user?.email}</h1>
    </div>
  )
};

export default Home;
