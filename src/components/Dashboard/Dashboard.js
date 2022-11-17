import './dashboard.css';
import Logo from "../../assets/images/logo.svg";
import { ListItem } from '../ListItem';

export const Dashboard = () => {
   const menu = [
      {
         text: "Overview",
      },
      {
         text: "Tickets",
      },
      {
         text: "Ideas",
      },
      {
         text: "Ideas",
      },
      {
         text: "Contacts",
      },
      {
         text: "Agents",
      }
      ,
      {
         text: "Articles",
      }
   ]
   const addMenu = [
      {
         text: "Settings",
      },
      {
         text: "Subscription",
      }
   ]
   return (
      <>
         <div className='dashboard__side__top'>
            <a href="#" className='dashboard__logo'>
               <img src={Logo} width='170' height='32'></img>
            </a>
            <ul className='dashboard__side__list'>
               {
                  menu.map(el => (
                     <ListItem text={el.text} image={el.img} menu={el} />
                  ))
               }
            </ul>
         </div>
         <div className='dashboard__side__bottom'>
            <ul className='dashboard__side__list'>
               {
                  addMenu.map(el => (
                     <ListItem text={el.text} image={el.img} menu={el} />
                  ))
               }
            </ul>
         </div>
      </>
   )
}