import loginImg from '../../assets/img/images/login/login.svg'
const Login = () => {
    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password);
        form.reset()
    }
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <h1 className="text-5xl font-bold">Login</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;