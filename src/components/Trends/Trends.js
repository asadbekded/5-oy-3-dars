import './Trends.css';
import ApexChart from './Diagrama/Diagrama';

export const Trends = () => {

   const resolved = [
      {
         id: 1,
         text: 'Resolved',
         num: '449',
      },
      {
         id: 2,
         text: 'Received',
         num: '426',
      },
      {
         id: 3,
         text: 'Average first response time',
         num: '33m',
      },
      {
         id: 4,
         text: 'Average response time',
         num: '3h 8m',
      },
      {
         id: 5,
         text: 'Resolution within SLA',
         num: '94%',
      },
   ]

   return(
   //   <div className='container'>
       <div className='trends-content'>
         <div className='today-box'>
            <h4 className='today-title'>Today's trends</h4>
            <div className='just-box'>
               <p className='today-time'>as of 25 May 2019, 09:41 PM</p>
               <div>
                  <span className='today-wed'>Today</span>
                  <span className='today-wed'>Yesterday</span>
               </div>
            </div>
            <ApexChart/>
         </div>
         <div className='resolve-box'>
            <ul className='resolve-list'>
               {
                  resolved.map(el => (
                     <li className='resolv-item'>
                        <h4 className='resolve-title'>{el.text}</h4>
                        <strong className='resolve-str'>{el.num}</strong>
                     </li>
                  ))
               }
            </ul>
         </div>
       </div>
   //   </div>
   )
};