import img1 from "../images/Me1.jpg";

function About() {
  return (
    <div className="aboutSection">
      <div className="column1">
        <h2>Dani</h2>
        <img src={img1} alt="image of myself Dani Mayfield" />
      </div>

      <div className="column2">
        <h2>Mayfield</h2>
        <div className="aboutText">
          <div className="breakLine"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            expedita architecto illo deleniti voluptatibus quibusdam, ratione
            vel sed! Perferendis eius eligendi deleniti sunt quasi, soluta
            perspiciatis nihil placeat assumenda eaque quisquam! Qui ipsa
            repellat nam ea voluptatibus? Ab blanditiis nisi ipsa distinctio,
            magni amet dolorum voluptatem. Porro neque iusto, nulla animi
            possimus et dolor architecto dolore accusantium hic alias quaerat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
