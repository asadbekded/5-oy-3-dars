import './Ticket.css';
export const Ticket = () => {

   const ticket = [
      {
         id: 1,
         text: 'Waiting on Feature Request',
         num: 4238,
      },
      {
         id: 2,
         text: 'Awaiting Customer Response',
         num: 1005,
      },
      {
         id: 3,
         text: 'Awaiting Developer Fix',
         num: 914,
      },
      {
         id: 4,
         text: 'Pending',
         num: 201,
      },
   ]

   return(
   //   <div className="container">
      <div className="ticket-content">
         <div className="header-ticket">
            <div className="ticket-box">
              <h3 className='ticket-title'>Unresolved tickets</h3>
              <p className='ticket-text'><span className='ticket-spn'>Group: </span>Support</p>
            </div>
            <p className='viev-text'>View details</p>
         </div>

         <ul className='ticket-list'>
            {
               ticket.map(el => (
                  <li className='ticket-item'>
                     <h4 className='pen-title'>{el.text}</h4>
                     <strong className='pen-str'>{el.num}</strong>
                  </li>
               ))
            }
         </ul>
      </div>
   //   </div>
   )
}