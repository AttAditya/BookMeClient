import { MovieList } from "../components";

export function MoviesPage() {
    let moviesData = [
        {
            id: "m1-dpwl",
            title: "Deadpool & Wolverine",
            image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg",
            rating: 0,
            description: "Deadpool and Wolverine team up to fight a common enemy."
        },
        {
            id: "m2-io2",
            title: "Inside Out 2",
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            rating: 7.7,
            description: "Riley is now a teenager and her emotions must deal with her new life."
        },
        {
            id: "m3-dm4",
            title: "Despicable Me 4",
            image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dbtxg1bQYYuWMQvtEuoiUe4uvFJ.jpg",
            rating: 7.5,
            description: "Gru and his family must face a new villain."
        },
        {
            id: "m4-tgm",
            title: "The Garfield Movie",
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
            rating: 7.3,
            description: "Garfield must save his owner from a new villain."
        },
        {
            id: "m5-mgrn",
            title: "Migration",
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
            rating: 7.5,
            description: "A story about migration and the struggles of people in search of a better life."
        }
    ];

    return (
        <div className="home p-20">
            <section className="featured">
                <div className="section-intro mb-10">
                    <h1 className="title text-5xl font-bold">
                        Running in Theaters
                    </h1>

                    <h2 className="subtitle text-3xl font-semibold color-gray mt-2">
                        New and Latest Releases in the Movie Industry
                    </h2>
                </div>

                <MovieList movies={moviesData} />
            </section>
        </div>
    );
}