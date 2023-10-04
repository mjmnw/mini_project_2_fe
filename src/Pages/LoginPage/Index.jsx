import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Reducer/Auth";
import * as yup from "yup";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axiosInstance from "../../Config/api";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResetPassword = () => {
      navigate("/resetpassword");
  };

  const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
          username: "",
          password: "",
      },
      validationSchema: yup.object().shape({
          username: yup.string().required("Username is Required"),
          password: yup.string().required("Password is Required"),
      }),
      onSubmit: (values) => {
          loginHandler(values);
      },
  });

  const loginHandler = async (form) => {
      try {
          const res = await axiosInstance.post(`/auth/login`, {
              username: form.username,
              password: form.password,
          });

          Cookies.set("user_token", res.data.result.tokens);
          Cookies.set("user_data", JSON.stringify(res.data.result.user));
          dispatch(login(res.data.result.user));

          navigate("/")
      } catch (error) {
          if (error.response.data.isError === true) {
              const mes = "No User Found!"
              alert(error.response.data.message);
          } else {
              console.log(error);
          }
      }
  };

  return (
    <div>
      <Navbar />
      <main className="flex h-screen items-center justify-center bg-black text-white">
        <div className="bg-neutral-950 p-8 rounded shadow-md w-400 ">
          <h2 className="text-2xl font-semibold mb-4 p-10">Login to Your Account</h2>
          <form
            className="flex-col gap-20 bg-neutral-900 p-8 rounded shadow-md w-150"
            onSubmit={formik.handleSubmit}
          >
            <label className="block text-sm font-medium mb-4">Username</label>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded text-black"
              name="username"
              onChange={(event) =>
                formik.setFieldValue(
                    "username",
                    event.target.value
                )
            }
            value={formik.values.username}
            />
            <p className="">{formik.errors.username}</p>

            <p className="block text-sm font-medium mt-5">Password</p>
            <input
              type={"password"}
              className="mt-1 p-2 border w-full rounded text-black"
              name="password"
              onChange={(event) =>
                formik.setFieldValue(
                    "password",
                    event.target.value
                )
            }
            value={formik.values.password}
            />
            <p className="">{formik.errors.password}</p>
            <a className="flex flex-row gap-1 text-xs justify-end mt-2">
            Don't have an account?
            </a>
            <a className="flex justify-end text-xs cursor-pointer text-sky-500" href="/register">
              Sign Up
            </a>
            <a className="flex flex-row gap-1 text-xs justify-end mt-2">
            Forget your password?
            </a>
            <a className="flex justify-end text-xs cursor-pointer text-sky-500" href="/resetpassword">
              Reset it here!
            </a>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5" type="submit">
              Login
            </button>
          </form>
        </div>
        </main>
        <Footer />
        </div>
  );
};

export default Login;