import "./header.css";
import Search from "../../assets/images/search.svg";
import New from "../../assets/images/new.svg";
import User from "../../assets/images/user.png";

export const Header = () => {
    return (
        <>
            <div className="header">
                <h2 className="header__title">Overview</h2>
                <div className="header__right">
                    <div className="header__icons">
                        <img src={Search} width='16' height='16'></img>
                        <img src={New} width='16' height='16'></img>
                    </div>
                    <div className="header__user">
                        <span>Jones Ferdinand</span>
                        <img src={User} width='48' height='40'></img>
                    </div>
                </div>
            </div>
        </>
    )
}