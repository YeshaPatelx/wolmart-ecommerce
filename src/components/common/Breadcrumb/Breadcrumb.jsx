import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import './breadcrumb.css';
const Breadcrumb = ({ title, items = [] }) => {
    return (


        <div className="breadcrumb">
            <Link to="/">Home</Link>

            {items.map((item, index) => (
                <span key={index} className="breadcrumb-item">
                    <FaAngleRight />
                    {item.link ? (
                        <Link to={item.link}>{item.label}</Link>
                    ) : (
                        <span>{item.label}</span>
                    )}
                </span>
            ))}
        </div>

    );
};

export default Breadcrumb;