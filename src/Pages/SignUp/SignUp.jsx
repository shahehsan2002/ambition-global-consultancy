
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {createUser}= useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    return (
        <>
         <Helmet>
                <title>Bistro Boss |Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                            deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name', { required: 'Name is required' })}
                                    placeholder="Name"
                                    className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                                />
                                {errors.name && <span className="text-xs text-error">{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                                    placeholder="Email"
                                    className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                                />
                                {errors.email && <span className="text-xs text-error">{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label htmlFor="password" className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', { required: 'Password is required', minLength: 6 })}
                                    placeholder="Password"
                                    className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                                />
                                {errors.password && <span className="text-xs text-error">{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="SignUp" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
