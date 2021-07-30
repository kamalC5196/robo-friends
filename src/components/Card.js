function Card(props){
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="" src={`https://robohash.org/${props.data.id}?size=200x200&set=set1`} />
            <div>
                <h2>{props.data.name}</h2>
                <p>{props.data.email}</p>
            </div>
        </div>
    )
}

export default Card;