import urls from "./urls";

async function register(name, email, password) {
    let resp = await fetch(urls.register, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    });

    return await resp.json();
}

async function login(email, password) {
    let resp = await fetch(urls.login, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    return await resp.json();
}

let authApi = {
    register,
    login
};

export default authApi;