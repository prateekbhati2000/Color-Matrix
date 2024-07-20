import './App.css';
import Matrix from './Components/Matrix/Matrix'

const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return <button onClick={handleRefresh}>Reset</button>;
};

function App() {
  return (
    <div className="App">
      <h1>Color-Matrix</h1>
      <Matrix/>
      
      <RefreshButton/>
    </div>
  );
}

export default App;
