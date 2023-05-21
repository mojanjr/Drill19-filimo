import"./style.css"

export function MovieList(props) {
    function movieListSection() {
        return props.data.map ((movie, i) => {
            return(
                <li key={i} className="movie-box">
                    <a href={movie.link} target="_blank">
                        <div className="image-box">
                            <img className="main" src={movie.imageUrl}/>
                            {movie.isExclusive === true ? <img className="exclusive" src="assets/images/exclusive-fa.svg" /> : ""}
                            <div className="hover-box">
                                <div className="content">
                                    <button className="rate">{movie.rate}<i className="fa-regular fa-thumbs-up"></i></button>
                                    <p className="type">{movie.type}</p>
                                    <p className="product">{movie.product}</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="movie-title">{movie.name}</h5>
                    </a>
                </li>
            )
        })
    }
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <ul>
                {movieListSection()}
            </ul>
        </div>
    )
}