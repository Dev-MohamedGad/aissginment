import { Link } from "react-router-dom";

interface FilmCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Card = ({ id, title, image, description }: FilmCardProps) => {
  return (
    <>
       <Link to={`/film/${id}`} className="text-indigo-600 ">
      <div className="border rounded-md shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4 ">{description}</p>
       
           
        
        </div>
      </div>
      </Link>
    </>
  );
};

export default Card;
