import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()
    
    return (
        <div className=" h-screen bg-[#F7FAF4] flex justify-center items-start pt-56">
  <div className="hero-content text-center ">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Oops! Page Not Found</h1>

      <p>{error.message}</p>

      <p className="py-6">It looks like you've ventured into uncharted territory. The page you were looking for seems to have gone on a little adventure of its own and couldn't be found.</p>
      <Link><button  className="btn bg-[#69A032] text-white">Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;