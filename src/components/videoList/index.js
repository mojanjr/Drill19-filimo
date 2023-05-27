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
                            <i className={"fa-solid fa-play"}></i>
                        </div>
                        <h3>{video.text}</h3>
                    </a>
                </li>
            )
        })
    }
    return (
        <div className="container2">
            <div className="title">
                <img className="logo" src="https://www.filimo.com/assets/web/ui/img-23SjILqYCSaEPakKNJTVXw/campaigns/big-screen_v2/filimobox_colored.png"/>
                <h2>فیلیموباکس چیست؟</h2>
            </div>
            <p>برای تماشای فیلیمو، تلویزیون شما باید هوشمند باشد، اگر نیست، با تهیه یک اندروید باکس، تلویزیون خود را هوشمند کنید، ما به شما فیلیمو باکس را پیشنهاد می‌کنیم که به تلویزیون وصل می‌شود و آن را هوشمند می‌کند. چطوری؟ کافیست ویدیو‌های زیر را تماشا‌کنید.</p>
            <a className="button" href="https://www.filimo.com/filimobox">
                <button>اطلاعات بیشتر<i className="fa-solid fa-arrow-left"></i></button>
            </a>
            <div className="list-holder">
                <ul>
                    {videoListSection()}
                </ul>
                <div className="arrows">
                    <i className="fa-solid fa-angle-right"></i>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
            </div>
        </div>
    )
}