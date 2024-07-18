import { BsStarFill } from "react-icons/bs";

export function MovieCard({ id, title, image, rating, description }) {
    return (
        <div className="movie-card flex-1">
            <div className="movie-card-image">
                <img src={image} alt={title} />
            </div>

            <div className="movie-card-content mt-2">
                <div className="flex gap-2">
                    <h3 className="title text-2xl font-semibold line-clamp-1 flex-1">
                        {title}
                    </h3>

                    <div className=" flex items-center mt-1">
                        <div className="rating-box bg-primary rounded font-semibold p-1">
                            <span className="flex items-center gap-1 text-xs">
                                {
                                    rating === 0 ? "NR" : (<>
                                        {Math.floor(10 * (rating / 2)) / 10}
                                        <BsStarFill className="text-white" />
                                    </>)
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <p className="description mt-2 line-clamp-1 color-gray">
                    {description}
                </p>

                <button className="btn btn-primary mt-2 bg-primary w-full p-2 rounded font-semibold hover:scale-95 active:scale-90">
                    Book Now!
                </button>
            </div>
        </div>
    );
}