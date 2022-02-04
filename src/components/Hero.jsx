import Carousel from "nuka-carousel";

import "../styles/hero.scss";

function Hero() {
  return (
    <div className="hero">
      <Carousel autoplay={true} autoplayInterval={3000}>
        <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
        <img src="http://www.dublinlaptoporchestra.com/wp-content/uploads/sites/1041/2020/05/gettyimages-638549776.jpg" />
        <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
        <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
        <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
        <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
      </Carousel>
    </div>
  );
}

export default Hero;
