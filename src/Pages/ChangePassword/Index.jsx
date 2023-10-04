import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Mypage from "../../Components/Mypage";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as yup from "yup";
import axiosInstance from "../../Config/api";
import Cookies from "js-cookie";

function ChangePassword() {
    const userSelector = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            oldPassword: "",
            newPassword: "",
        },
        validationSchema: yup.object().shape({
            oldPassword: yup.string().required("Old Password is Required"),
            newPassword: yup.string().required("New Password is Required"),
        }),
        onSubmit: (values) => {
            changePasswordHandler(values);
        },
    });

    const changePasswordHandler = async (form) => {
        try {
            const res = await axiosInstance.post(`/auth/change-password`, {
                userId: userSelector.id,
                oldPassword: form.oldPassword,
                newPassword: form.newPassword,
            });

            Cookies.remove("user_token");
            Cookies.remove("user_data");

            navigate("/");
        } catch (error) {
            if (error.response.data.isError === true) {
                const mes = "No User Found!";
                alert(error.response.data.message);
            } else {
                console.log(error);
            }
        }
    };
    return (
        <>
            <div className="bg-black text-white h-screen">
                <Navbar />
                <div className="pb-20 border-b"></div>
                <Mypage />
                <main className="flex h-screen items-center justify-center bg-black text-white">
                    <div className="bg-neutral-950 p-8 rounded shadow-md w-400 ">
                        <h2 className="text-2xl font-semibold mb-4 p-10">
                            Change your Password
                        </h2>
                        <form
                            className="flex-col gap-20 bg-neutral-900 p-8 rounded shadow-md w-150"
                            onSubmit={formik.handleSubmit}
                        >
                            <label className="block text-sm font-medium mb-4">
                                Old Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 p-2 border w-full rounded text-black"
                                name="oldPassword"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        "oldPassword",
                                        event.target.value
                                    )
                                }
                                value={formik.values.oldPassword}
                            />
                            <p className="">{formik.errors.oldPassword}</p>

                            <p className="block text-sm font-medium mt-5">
                                New Password
                            </p>
                            <input
                                type={"password"}
                                className="mt-1 p-2 border w-full rounded text-black"
                                name="newPassword"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        "newPassword",
                                        event.target.value
                                    )
                                }
                                value={formik.values.newPassword}
                            />
                            <p className="">{formik.errors.newPassword}</p>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5"
                                type="submit"
                            >
                                Change your Password
                            </button>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default ChangePassword;
