import { Action, Reducer } from "redux";

export interface Movie {
    id: number;
    title: string;
    popularity: number;
    overview: string;
}
interface MovieState {
    top: Movie[]
}
const initialState: MovieState = {
    top: [
        { id: 1, title: "Inception", popularity: 98, overview: "Dreams..." },
        { id: 2, title: "LoveinParis", popularity: 48, overview: "Love" },
        { id: 3, title: "HiBaby", popularity: 55, overview: "Travel..." },
        { id: 4, title: "Hobbit", popularity: 99, overview: "Small Hobbit..." },
    ]
}

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
    return initialState;
}

export default moviesReducer; 