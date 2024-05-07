import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
  
  const Favorites = () => {
    const favorites = useSelector((state) => state.favorite.list)
    const dispatch = useDispatch()
  
    const navigate = useNavigate()
  
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Favorites</h1>
            <Button onClick={() => navigate('/')}>Home</Button>
          </Col>
          <Col xs={10} className="mx-auto my-3">
            <ListGroup>
              {favorites.map((fav, i) => (
                <ListGroupItem key={i}>
                  <StarFill
                    className="mr-2"
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_FAVORITE',
                        payload: fav,
                      })
                    }
                  />
                  <Link to={'/' + fav}>{fav}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default Favorites
  