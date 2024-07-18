

function SalonCard(props){
    return(
        <div className="card">
            <img src={props.image} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary b-card">Go somewhere</a>
            </div>
        </div>
    )
}

export default SalonCard;