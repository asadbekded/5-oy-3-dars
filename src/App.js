import './assets/styles/index.css';
import { Trends, Ticket, Task } from './components';
function App() {
  return (
    <div className="container">
      <div className='ultra-content'>
        <div><h1>Jonibek chap tomondegini shu divni ichiga sol</h1></div>
        <div>
          <Trends/>
          <div className='details-content'>
            <Ticket/>
            <Task/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;