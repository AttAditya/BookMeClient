import { BiSearch } from "react-icons/bi";

export function Navbar() {
    return (
        <nav className="bg-primary w-full">
            <ul className="p-2 flex items-center justify-between">
                <li className="font-bold text-3xl p-2">
                    BookMe!
                </li>
                <li className="flex-1 flex items-center justify-center gap-2">
                    <input type="text" placeholder="Search for movies" className="px-4 p-2 rounded w-1/2 color-black" />

                    <button className="btn btn-primary p-2 rounded font-bold hover:scale-110 active:scale-90 text-2xl">
                        <BiSearch />
                    </button>
                </li>
                <li className="flex items-center gap-4 px-2">
                    <button className="btn btn-primary p-2 rounded font-semibold hover:scale-95 active:scale-90">
                        Login
                    </button>
                </li>
            </ul> 

            <div className="flex items-center justify-center px-4">
                <hr className="w-full" />
            </div>

            <ul className="flex items-center justify-start gap-2 p-2 px-4">
                <li className="font-semibold">
                    <button className="bg-black px-2 py-1 rounded hover:bg-black">
                        Movies
                    </button>
                </li>
                <li className="font-semibold">
                    <button className="bg-primary px-2 py-1 rounded hover:bg-black">
                        Theaters
                    </button>
                </li>
            </ul>
        </nav>
    );
}