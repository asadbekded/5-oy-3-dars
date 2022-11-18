import './assets/styles/index.css';
import { Trends, Ticket, Task, Dashboard, Header, CheckItem } from './components';
function App() {
  const checks = [
    {
      text: "Unresolved",
      number: 60,
    },
    {
      text: "Overdue",
      number: 16,
    },
    {
      text: "Open",
      number: 43,
    },
    {
      text: "On hold",
      number: 64,
    },
  ]

  return (
    <div className='ultra-content'>
      <div className='fix-content'>
      <div className='dashboard__side'>
        <Dashboard />
      </div>
      </div>
      <div className='dashboard__right'>
        <Header />
        <div className='check'>
          <ul className='check__list'>
            {checks.map(el => (
              <CheckItem text={el.text} num={el.number} checks={el} />
            ))}
          </ul>
        </div>
        <Trends />
        <div className='details-content'>
          <Ticket />
          <Task />
        </div>
      </div>
    </div>

  );
};

export default App;