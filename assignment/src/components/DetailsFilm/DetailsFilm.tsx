import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilms } from "../../store/filmSlice";

const DetailsFilm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const films = useSelector((state: any) => state.films.films);
  const status = useSelector((state) => state.films.status);
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  console.log(films, "foils");
  const film = films.find((e) => e.id == id);
  if (film)
    return (
      <div className="container mx-auto p-8 text-white">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <img
              src={"https://via.placeholder.com/300"}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4 text-red-400"> Movie</h1>
            <div>
              <h2 className="text-2xl font-bold text-blue-400">Title :</h2>
              <p className="mb-4 font-extrabold ">{film.title}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-400">Desc :</h2>
              <p className="mb-4 font-extrabold ">{film.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsFilm;
