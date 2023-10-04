import { useFormik } from "formik";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axiosInstance from "../../Config/api";

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            fullname: "",
            email: "",
            birthdate: "",
            address: "",
            phone_number: "",
            gender: "",
        },
        validationSchema: yup.object().shape({
            username: yup
                .string()
                .max(20, "Max Character is 20")
                .required("Username is Required."),
            password: yup.string().required("Password is Required."),
            fullname: yup
                .string()
                .max(20, "Max Character is 20")
                .required("Full Name is Required."),
            email: yup
                .string()
                .email("Please use a correct email")
                .required("Email is Required."),
            birthdate: yup.string().required("Birthdate is Required."),
            address: yup.string().required("Address is Required."),
            phone_number: yup.string().required("Phone number is Required."),
            gender: yup.string().required("Gender is Required."),
        }),
        validateOnChange: true,
        onSubmit: async (values) => {
            try {
                await axiosInstance.post(`/auth/register`, {
                    ...values,
                    refferal_code: nanoid(7),
                    balance: 50000000,
                    point: 1000,
                    users_roles_id: 2,
                });

                navigate("/login");
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div>
            <Navbar />
            <main className="flex items-center justify-center bg-black text-white">
                <div className="bg-neutral-950 p-8 rounded shadow-md w-400">
                    <span className="flex text-2xl font-semibold pb-10 ">
                        Register your Account
                    </span>
                    <form
                        className="flex-col gap-20 bg-neutral-900 p-8 rounded shadow-md w-150"
                        onSubmit={formik.handleSubmit}
                    >
                        <p className="block text-sm font-medium ">Username</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="username"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.username}
                        </p>

                        <p className="block text-sm font-medium ">Full Name</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="fullname"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.fullname}
                        </p>

                        <p className="block text-sm font-medium mt-5">Email</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="email"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.email}
                        </p>

                        <p className="block text-sm font-medium ">Birthdate</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="birthdate"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.birthdate}
                        </p>

                        <p className="block text-sm font-medium ">Address</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="address"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.address}
                        </p>

                        <p className="block text-sm font-medium mt-5">
                            Phone Number
                        </p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="phone_number"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.phone_number}
                        </p>

                        <p className="block text-sm font-medium mt-5">
                            Password
                        </p>
                        <input
                            type="password"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="password"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.password}
                        </p>

                        <p className="block text-sm font-medium mt-5">Gender</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border w-full rounded text-black"
                            name="gender"
                            onChange={formik.handleChange}
                        />
                        <p style={{ margin: 0, color: "red" }}>
                            {formik.errors.gender}
                        </p>

                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Register;
