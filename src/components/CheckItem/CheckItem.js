import "./checkitem.css";

export const CheckItem = (checks) => {
    const { text, num } = checks;
    return (
        <li className="check__item">
            <span className="check__title">{text}</span>
            <span className="check__num">{num}</span>
        </li>
    )
}