import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
    return (
      <Container>
        <Row xs={1} md={3}>
          {posts.map(idx => (
            <Col key={idx.mission_name} >
              <div className="card">
                <img src={idx.links.flickr_images[0]} alt=""/>
                <p style={{ color: idx.launch_success === true ? 'green' : 'red' }}>{idx.mission_name}</p>
                <p>{idx.launch_date_local}</p>
                <a href={idx.links.wikipedia} target="_blank" rel="noopener noreferrer">{idx.links.wikipedia !== null ? "Wikipedia" : " "}</a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
}

export default Cards;
