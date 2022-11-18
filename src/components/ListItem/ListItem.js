import './listitem.css';

export const ListItem = ({ menu }) => {
    const { text, image } = menu;
    return (
        <a href='#'>
            <li className="dashboard__sideitem">
                <a href='#' className="dashboard__side__link">
                    {/* <img src={} alt={'icon'} width="32" height="32"></img> */}
                    <span className='dash_icon'>{image}</span>
                    <span className="dashboard__side__text">{text}</span>
                </a>
            </li>
        </a>
    )
}