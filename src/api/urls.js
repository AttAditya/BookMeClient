const baseUrl = "http://localhost:8081/api";
function generateUrl(path) {
    return `${baseUrl}${path}`;
}

let urls = {
    login: generateUrl("/auth/login"),
    register: generateUrl("/auth/register"),
    movies: generateUrl("/movies"),
    theatres: generateUrl("/theatres")
};

export default urls;