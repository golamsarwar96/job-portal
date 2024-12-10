import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import registrationLottie from "../../assets/Lottie/register.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
const Register = () => {
  // /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  const { user, createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <div>
              <Lottie
                className="mx-auto"
                animationData={registrationLottie}
                style={{ width: "300px" }}
              ></Lottie>
            </div>

            <div className="card w-full max-w-sm shrink-0 ">
              <small className="text-blue-600 text-lg">Register</small>
              <h1 className="text-5xl font-bold text-center">
                Start for free Today
              </h1>
              <p className="mt-2 text-lg">
                Access to all features. No credit card required.
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="flex items-center justify-center gap-3 px-[72px] font-semibold text-xl bg-white py-4 rounded-xl hover:bg-base-100 border border-blue-200">
                <FcGoogle className="text-2xl"></FcGoogle> Sign Up With Google
              </button>
            </div>
            <p className="mt-3">Or Continue With</p>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already Have An Account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;