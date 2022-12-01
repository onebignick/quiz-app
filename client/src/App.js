import './App.css';
import { Quiz } from './components/quiz'
import { Results } from './components/results';

function App() {
  return (
    <div className="App">
      <Quiz/>
      <Results />
    </div>
  );
}

export default App;
