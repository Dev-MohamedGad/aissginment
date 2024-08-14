import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
    <div className="text-red-400 text-2xl font-bold">
      <Link to="/">Web Films</Link>
    </div>
    <div className="flex space-x-4">
      <Link to="/" className="hover:text-red-400">Home</Link>
      <Link to="/" className="hover:text-red-400">Movies</Link>
      <Link to="/" className="hover:text-red-400">TV</Link>
      <Link to="/" className="hover:text-red-400">Actors</Link>
    </div>
  
  </nav>
  )
}

export default NavBar