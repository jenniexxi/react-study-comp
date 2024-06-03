import { Link } from "react-router-dom";

function Header({children}) {
    return (
        <div>
            <Link to="/">메인</Link><br />
            <Link to="/page1">page1</Link><br />
            <Link to="/page2">page2</Link>
            {children}
        </div>
    )
}

export default Header;