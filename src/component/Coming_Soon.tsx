import { Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import movies_coming from '../model/movies_coming';
import { NavLink } from 'react-router-dom';

type Props = {
    movies_ComingSoon: movies_coming[];
    increaseQty_ComingSoon: (movies_coming: movies_coming) => void;
    movies_Description_ofMoviesComing: (movies_coming: movies_coming) => void;
};


const Coming_Soon = ({ movies_ComingSoon, increaseQty_ComingSoon }: Props) => {  
    return (
        <div>
            <h2 id="h2">Movies coming soon</h2>
            <hr id="hr" />
            <Row xs={2} lg={6}>
                {movies_ComingSoon.map((movie_coming) => (

                    <Col key={movie_coming.id} className="my-2 d-flex align-items-stretch ">

                        <Card style={{ width: '18rem' }}>
                            <NavLink id="navLink" to={'/Coming_Soon/' + `${movie_coming.title}`} >
                            <Card.Img variant="top" src={movie_coming.posterurl} />
                            </NavLink>
                            <Card.Body id="CardBody">
                                <Card.Title>{movie_coming.title}</Card.Title>

                                <Button variant="primary" onClick={() => increaseQty_ComingSoon(movie_coming)}>Add to Favourite <FontAwesomeIcon icon={faHeart} /></Button>

                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>

    );
}

export default Coming_Soon;
