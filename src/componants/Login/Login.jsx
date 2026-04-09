import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  Eye,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User.context";
import { ReloadDots } from "../loading/loading";

export default function Login() {
  let {setUserToken,setUserProfile}=useContext(UserContext)
  let navigate = useNavigate();
  let [error, setError] = useState(null);
  const [isloading, setisoLading] = useState(false);
  async function supmitLogin(values) {
    console.log(values, "values in get data");

    setisoLading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((err) => {
        setError(err.response.data.message);
        setisoLading(false);
      });
    console.log();

    if (data.message === "success") {
      localStorage.setItem('userToken',data?.token)
    setUserToken(data?.token)
    setUserProfile(data?.user)
    setisoLading(false)
    navigate('/')
    }
  }

  
  let validationSchema = Yup.object({
    
    email: Yup.string()
      .email("email is not true")
      .required("email is required"),
    password: Yup.string()
      .matches(/^[a-z0-9]{5,8}$/, "password is not true")
      .required("password is required"),
    
  });

  let formik = useFormik({
    initialValues: {
      
      email: "",
      password: "",
      
    },
    validationSchema,
    onSubmit: supmitLogin,
  });
  return (
    <section className="min-h-screen mt-24 bg-gray-100 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto grid w-full container grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
        <div className="flex items-center justify-center bg-white p-8 md:p-12">
          <div className="w-full max-w-xl text-center">
            <div className="mx-auto mb-8 flex h-56 w-full max-w-md items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
              <div className="text-8xl">🛒</div>
            </div>

            <h2 className="mb-3 text-3xl font-extrabold text-gray-800 md:text-4xl">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="mx-auto mb-8 max-w-md text-gray-500">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-green-600" />
                Free Delivery
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Secure Payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-green-600" />
                24/7 Support
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center border-l border-gray-100 bg-white p-6 md:p-10">
          <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-green-600">FreshCart</h1>
              <h3 className="mt-2 text-2xl font-bold text-gray-800">
                Welcome Back!
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span className="text-base font-bold text-red-500">G</span>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span className="text-base font-bold text-blue-600">f</span>
                Continue with Facebook
              </button>
            </div>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Or continue with email
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <form className="space-y-4 " onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">{formik.errors.email}</strong>
                  </div>
                ) : null}
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium text-green-600 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-9 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                  />

                  <Eye className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">
                      {formik.errors.password}
                    </strong>
                  </div>
                ) : null}
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                Keep me signed in
              </label>

              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                {isloading ? <ReloadDots /> : "Sign In"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              New to FreshCart?{" "}
              <a
                href="/register"
                className="font-semibold text-green-600 hover:underline"
              >
                Create an account
              </a>
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                SSL Secured
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                50K+ Users
              </span>
              <span className="inline-flex items-center gap-1">
                <BadgeCheck className="h-3.5 w-3.5" />
                4.9 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
