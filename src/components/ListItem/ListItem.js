import './listitem.css';

export const ListItem = ({ menu }) => {
    const { text } = menu;
    return (
        <a href='#'>
            <li className="dashboard__side__item">
                <a href='#' className="dashboard__side__link">
                    {/* <img src={image} alt="Img" width="32" height="32"></img> */}
                    <span className="dashboard__side__text">{text}</span>
                </a>
            </li>
        </a>
    )
}