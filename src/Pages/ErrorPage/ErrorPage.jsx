import { Link, useRouteError } from "react-router-dom";
import { FaHome, FaCompass } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen bg-light dark:bg-dark flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800">404</h1>
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Lost in Transit?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                    The page you are looking for seems to have flown away. But don't worry, you can always find your way back.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="btn btn-primary gap-2 text-white px-8">
                        <FaHome /> Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
