import { useRef, useState } from "react";
import api from "../api";

export function LoginPage() {
    let [authMode, setAuthMode] = useState("login");
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();

    function handleAuth(event) {
        event.preventDefault();

        if (authMode === "login") {
            loginAction(event);
        } else {
            registerAction(event);
        }
    }

    async function loginAction(event) {
        let email = emailRef.current.value;
        let password = passwordRef.current.value;

        let resp = await api.auth.login(email, password);
        console.log(resp);
    }

    async function registerAction(event) {
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;

        let resp = await api.auth.register(name, email, password);
        console.log(resp);
    }

    return (
        <div className="home p-20">
            <section className="featured">
                <div className="section-intro mb-10">
                    <h1 className="title text-5xl font-bold">
                        Let's get you in!
                    </h1>
                    
                    <h2 className="subtitle text-3xl font-semibold color-gray mt-2">
                        Enter your credentials to continue.
                    </h2>

                    <form className="form p-5 rounded mt-5 w-1/2 border-primary border-2 flex flex-col gap-4">
                        {
                            authMode === "register" && (
                                <div className="form-group">
                                    <label htmlFor="name" className="label font-semibold text-lg">
                                        Name
                                    </label>
                                    <input type="text" className="input p-2 rounded w-full mt-2 color-black" placeholder="Enter your name" ref={nameRef} />
                                </div>
                            )
                        }

                        <div className="form-group">
                            <label htmlFor="email" className="label font-semibold text-lg">
                                Email
                            </label>
                            <input type="email" className="input p-2 rounded w-full mt-2 color-black" placeholder="Enter your username" ref={emailRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="label font-semibold text-lg">
                                Password
                            </label>
                            <input type="password" className="input p-2 rounded w-full mt-2 color-black" placeholder="Enter your password" ref={passwordRef} />
                        </div>

                        <div className="form-group pt-4">
                            <button className="btn bg-primary px-4 py-2 rounded font-semibold hover:scale-95 active:scale-90" type="submit" onClick={handleAuth}>
                                {authMode === "login" ? "Login" : "Register"}
                            </button>

                            <p className="flex items-center justify-start gap-1 mt-2">
                                <span className="">
                                    {authMode === "login" ? "Don't have an account?" : "Already have an account?"}
                                </span>
                                <span className="text-primary font-semibold cursor-pointer" onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}>
                                    {authMode === "login" ? "Register" : "Login"}
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}