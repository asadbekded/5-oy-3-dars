import './Task.css';
import Plus from '../../assets/images/inactive.svg'

export const Task = () => {

   const task = [
      {
         id: 1,
         text: 'Finish ticket update',
         but: 'Urgent',
      },
      {
         id: 2,
         text: 'Create new ticket example',
         but: 'New',
      },
      {
         id: 3,
         text: 'Update ticket report',
         but: 'Default',
      },
   ]

   return(
      // <div className='container'>
         <div className='ticket-content'>
           <div className="header-ticket">
              <div className="ticket-box">
                <h3 className='ticket-title'>Tasks</h3>
                <span className='ticket-spn'>Today</span>
              </div>
              <p className='viev-text'>View details</p>
           </div>

           <form className='ticket-list' method='post'>
            <div className='form-box'>
              <h3 className='form-title'>Create new task</h3>
              <img src={Plus} alt='plus img' width={24} height={24}/>
            </div>
            {
               task.map(el => (
                  <div className='task-item'>
                     <div className='pen-box'>
                       <input className='pen-inp' type={'checkbox'}/>
                       <h4 className='pen-title'>{el.text}</h4>
                     </div>
                     <button  type='button' className='task-but'>{el.but}</button>
                  </div>
               ))
            }
           </form>
         </div>
      // </div>
   )
}
