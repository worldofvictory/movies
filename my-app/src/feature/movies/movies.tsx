import { Movie } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";
import "./Movie.css";

interface MoviesProps {
    movies: Movie[]
}

 function Movies({ movies }: MoviesProps) {
    return <section>
        <div className="Movies-list">
     {movies.map((m)=>(     
         <MovieCard key={m.id} id={m.id} title={m.title} popularity={m.popularity} overview={m.overview} />
     ))}  
      </div>      
    </section>;
}
const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
})
const connector = connect(mapStateToProps);
export default connector(Movies);