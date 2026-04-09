import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  BadgeCheck,
  CircleCheckBig,
  ShieldCheck,
  Star,
  Truck,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReloadDots } from "../loading/loading";
import { useState } from "react";

export default function Register() {
  let navigate = useNavigate();
  let [error, setError] = useState(null);
  const [isloading, setisLoading] = useState(false);
  async function submitRegister(values) {
    console.log(values, "values in get data");

    setisLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup/", values)
      .catch((err) => {
        setError(err.response.data.message);
        setisLoading(false);
      });
    console.log();

    if (data.message === "success") {
      setisLoading(false);
      navigate("/login");
    }
  }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "username minLength is 3")
      .max(10, "username maxLength is 10")
      .required("username is requierd"),
    phone: Yup.string()
      .matches(phoneRegExp, "phoneNumber number is false")
      .required("phoneNumbers is required"),
    email: Yup.string()
      .email("email is not true")
      .required("email is required"),
    password: Yup.string()
      .matches(/^[a-z0-9]{5,8}$/, "password is not true")
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), "repassword not matched password"])
      .required("rePassword is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submitRegister,
  });

  return (
    <section className="min-h-screen bg-gray-100 mt-24 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto grid w-full container grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
        <div className="border-r border-gray-100 bg-white p-8 md:p-10">
          <div className="mx-auto w-full max-w-xl">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Welcome to <span className="text-green-600">FreshCart</span>
            </h2>
            <p className="mt-2 text-lg text-gray-500">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2.5">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Premium Quality
                  </h4>
                  <p className="text-sm text-gray-500">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2.5">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Fast Delivery
                  </h4>
                  <p className="text-sm text-gray-500">
                    Same-day delivery available in most areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2.5">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Secure Shopping
                  </h4>
                  <p className="text-sm text-gray-500">
                    Your data and payments are completely secure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <UserRound className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Sarah Johnson</h5>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    <Star className="h-4 w-4 fill-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-gray-600">
                "FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommended!"
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800">
                Create Your Account
              </h1>
              <p className="mt-1 text-gray-500">
                Start your fresh journey with us today
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <span className="mr-2 font-bold text-red-500">G</span>
                Google
              </button>
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <span className="mr-2 font-bold text-blue-600">f</span>
                Facebook
              </button>
            </div>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  id="name"
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Ali"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">{formik.errors.name}</strong>
                  </div>
                ) : ("")}
              </div>
              <wrongAlart />

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  id="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="email"
                  placeholder="ali@example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">{formik.errors.email}</strong>
                  </div>
                ) : ("")}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Password*
                </label>
                <input
                  id="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                  placeholder="create a strong password"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                />
                <div className="mt-2">
                  <div className="h-1.5 w-full rounded-full bg-gray-200">
                    <div className="h-1.5 w-1/4 rounded-full bg-yellow-500" />
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
                    <span>
                      Must be at least 8 characters with numbers and symbols
                    </span>
                    <span className="font-medium text-gray-500">Weak</span>
                  </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">{formik.errors.password}</strong>
                  </div>
                ) : ("")}
              </div>

              <div>
                <label
                  htmlFor="rePassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Confirm Password*
                </label>
                <input
                  id="rePassword"
                  onBlur={formik.handleBlur}
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  type="password"
                  placeholder="confirm your password"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                />
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">{formik.errors.rePassword}</strong>
                  </div>
                ) : ("")}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <input
                  id="phone"
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none ring-green-500 transition focus:border-green-500 focus:ring-1"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong className="font-bold">{formik.errors.phone}</strong>
                  </div>
                ) : ("")}
              </div>

              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  *
                </span>
              </label>

              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                {isloading ? (
                  <ReloadDots />
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <CircleCheckBig className="h-4 w-4" />
                    Create My Account
                  </div>
                )}
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-green-600 hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
