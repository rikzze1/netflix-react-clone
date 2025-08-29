
import type { MovieResponse } from '@/types/types';
import { useRandomMovies } from '@/services/queries/random-movies.query';

import { MovieCard } from '@/components/Movies/List/CaptivatingList/MovieCard/MovieCard';

import './Captivating.scss';

export const CaptivatingList = () => {
    const {
        data: randomMoviesData,
        isSuccess: isSuccessRandomMovies
    } = useRandomMovies();

    return (
        <div className="card">
            <h2 className="card__title">So Completely Captivating</h2>
            <div className="card__list">
                {isSuccessRandomMovies && randomMoviesData ? (
                    randomMoviesData?.results.map(({ id, title, backdrop_path }: MovieResponse) => (
                        <div key={id}>
                            <MovieCard id={id} title={title} backdrop_path={backdrop_path} />
                        </div>
                    ))
                ) : (
                    <div>
                        loading
                    </div>
                )}
            </div>
        </div>
    );
};
