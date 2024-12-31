import './card.styles.css';

const Card = (props) => {

    return (

        <div className={`card ${!!props.className ? props.className : ''}`}>
            <h1 className='card-title'>{props.title}</h1>
            {props.children}
        </div>
    );
};

export default Card;