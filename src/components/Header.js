import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <Carousel>

    <Carousel.Item>
            <img
              className="d-block w-100"
              src="./movie-still-3.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              
              <p>
              Everything Everywhere All at Once (2022)
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-5.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p>Nope (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-9.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Dune (2021)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>Everything Everywhere All at Once (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-6.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p>Hereditary (2018)</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-4.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p>Nope (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-8.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p>Dune (2021)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./movie-still-7.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p>Hereditary (2018)</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Header;