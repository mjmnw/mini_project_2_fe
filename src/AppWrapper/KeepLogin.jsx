import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Reducer/Auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const KeepLogin = ({ children }) => {
    const userSelector = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const refresh = async () => {
        const userData = Cookies.get("user_data");

        if (userData) {
            dispatch(login(userData));
        } else if (
            !userData &&
            location.pathname.includes("transaction-confirmation")
        ) {
            navigate("/login");
        } else if (
            !userData &&
            location.pathname.includes("merchandise-confirmation")
        ) {
            navigate("/login");
        }
    };

    useEffect(() => {
        if (!userSelector.id) {
            refresh();
        }
    }, [userSelector.id]);

    return children;
};

export default KeepLogin;
