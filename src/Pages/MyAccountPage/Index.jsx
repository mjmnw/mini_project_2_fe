import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Mypage from "../../Components/Mypage";
import TableAccount from "../../Components/TableAccount";
import { useNavigate } from "react-router-dom";

function MyAccount() {
    const navigate = useNavigate();

    const handleChangePassword = () => {
        navigate("/changepassword");
    };
    return (
        <>
            <div className="bg-black text-white h-screen">
                <Navbar />
                <div className="pb-20 border-b"></div>
                <Mypage />
                <h1 className="flex justify-center text-4xl pb-10">
                    Account Information
                </h1>
                <div className="h-[100px] w-[100px] mb-3 ml-5 place-items-center">
                    <img
                        src="https://i.ibb.co/x1spYy5/default-user.jpg"
                        alt="/"
                        className="object-fill"
                    />
                </div>
                <TableAccount />
                <div className="w-full bg-black pb-20">
                    <button className="border-2 p-5 rounded-xl" onClick={handleChangePassword}>Change my password</button>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyAccount;
