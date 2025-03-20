export interface Plan {
  title: string
  price: string
  features: string[]
  isBest: boolean
}

export interface Movie {
  id: number
  backdrop_path: string
  comments: string
  homepage: string
  genre_ids: number[]
  overview: string
  poster_path: string
  popularity: number
  tagline: string
  title: string
  vote_count: number
  vote_average: number
  release_date: number
  runtime: number
  origin_country: string
  original_language: string
  original_title: string
}

export interface Serie {
  id: number
  name: string
  overview: string
  poster_path: string
  title: string
  vote_average: number
}

export interface Credit {
  id: number
  name: string
  profile_path: string
}

export interface SimilarMovie {
  id: number
  poster_path: string
  title: string
}

export interface Genres {
  id: number
  name: string
}

export interface MovieState {
  movies: Movie[]
  movie: Movie | null
  credits: {
    directors: string[]
    actors: string[]
  }
  similarMovies: SimilarMovie[]
  trendingMovies: Movie[]
  genres: Genres[]
  loading: boolean
  error: string | null
  certifications: string | null
  lastFetch: number
}

export interface SerieState {
  series: Serie[]
  loading: boolean
  error: string | null
  lastFetch: number
}
