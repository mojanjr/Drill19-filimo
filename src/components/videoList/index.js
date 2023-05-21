import"./style.css"

export function VideoList(props) {
    function videoListSection() {
        return props.data.map (function(video, i) {
            return(
                <li key={i}>
                    <a href={video.link}>
                        <img src={video.imageUrl}/>
                        <div className="button">
                            <div className="border"></div>
                            <i className="fa-solid fa-play"></i>
                        </div>
                        <h3>{video.text}</h3>
                    </a>
                </li>
            )
        })
    }
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <ul>
                {videoListSection()}
            </ul>
        </div>
    )
}