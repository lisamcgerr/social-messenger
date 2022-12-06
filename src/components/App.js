import '../style/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />

      </div>
    </div>
  );
}

export default App;
