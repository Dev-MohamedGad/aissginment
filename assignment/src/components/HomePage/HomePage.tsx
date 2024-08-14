import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFilms } from "../../store/filmSlice";
import Loader from "../Loader";
import Card from "../Card/Card";

const HomePage = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.films);
  const status = useSelector((state) => state.films.status);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto h-full w-full text-center ">
      {films.map((film) => (
        <Card
          key={film.id}
          id={film.id}
          title={film.title}
          image={"https://via.placeholder.com/250"}
          description={film.body}
        />
      ))}
    </div>
  );
};

export default HomePage;
