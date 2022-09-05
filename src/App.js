import { PomodoroContextProvider } from './store-context/timeContext';
import UI from './UI/UI';

function App() {
  return <PomodoroContextProvider>
    <UI/>
  </PomodoroContextProvider>;
}

export default App;
