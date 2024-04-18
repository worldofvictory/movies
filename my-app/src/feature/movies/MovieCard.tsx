import { Link } from "react-router-dom";
import "./Movie.css";
interface MovieCardProps {
    id: number;
    title: string;
    overview: string;
    popularity: number;
}

export function MovieCard({ title, overview, popularity, id }: MovieCardProps) {
  return <div className="Movies-card">
                <Link to ={`/movies/${id}`}>{title}</Link>
                <div className="Movies-card-overwiev">{overview }</div>
                <div className="Movies-card-populity">{popularity}</div>
            </div>
}