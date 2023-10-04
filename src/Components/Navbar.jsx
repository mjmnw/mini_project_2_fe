import { useSelector } from "react-redux";
import Logo2 from "./../Utilities/Images/Logo2.png";
import { TbMoodSearch } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { MdFace } from "react-icons/md";
import Cookies from "js-cookie";

function Navbar({ searchHandler }) {
    const userSelector = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    const logoutHandler = () => {
        Cookies.remove("user_token");
        Cookies.remove("user_data");
        navigate("/login");
    };

    return (
        <>
            <nav className="flex h-[80px] bg-black justify-between items-center text-white text-xl montserratbold ">
                <div className="flex pl-10 w-[400px]">
                    <a href="http://localhost:3000" className="w-[150px]">
                        <img src={Logo2} alt="Logo2" />
                    </a>
                </div>

                <div>
                    {location.pathname === "/" && (
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <TbMoodSearch className="text-neutral-700" />
                            </span>
                            <input
                                className="placeholder:italic placeholder:text-neutral-700 block bg-neutral-900 w-[500px] rounded-md  py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm"
                                placeholder="Search event . . ."
                                type="text"
                                name="search"
                                onChange={(e) => searchHandler(e.target.value)}
                            />
                        </label>
                    )}
                </div>

                <div
                    className="pr-10 flex text-base w-[400px]"
                    style={{
                        alignItems: "center",
                    }}
                >
                    <div className="pr-2 flex text-base">
                        <span className="flex pl-2 pr-5 hover:text-red-600 items-center">
                            <a
                                href="http://localhost:3000/merchandise"
                                className="align-middle"
                            >
                                MERCHANDISE
                            </a>
                        </span>
                        <span className="flex w-[120px] pl-2 pr-2 hover:text-red-600">
                            <a
                                href="http://localhost:3000/aboutus"
                                className="align-middle"
                            >
                                ABOUT US
                            </a>
                        </span>
                    </div>
                    {!!userSelector.id && (
                        <a
                            style={{
                                border: "1px solid white",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                height: 20,
                                width: 20,
                                justifyContent: "center",
                                marginRight: 17,
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/myaccount")}
                        >
                            <MdFace />
                        </a>
                    )}
                    <div className="flex rounded-lg w-[80px] ml-3 h-[30px] bg-neutral-900 hover:bg-neutral-800 text-white ">
                        {userSelector.id ? (
                            <button
                                className="flex justify-center items-center w-full h-full hover:text-red-600"
                                onClick={logoutHandler}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="flex justify-center items-center w-full h-full hover:text-red-600"
                                onClick={() => navigate("/login")}
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
