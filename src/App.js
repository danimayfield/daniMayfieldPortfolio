import Slider from 'react-perfect-slider';

function App() {
  return (
    <div>
      <Slider
        renderControls={(next, previous) => [
          <button onClick={previous}>Previous</button>,
          <button onClick={next}>Next</button>,
        ]}  
      >
        <div>
          <h1>slide 1</h1>
          <p>Slide 1</p>
          <a href="www.facebokk.com">test</a>
        </div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    </div>
  );
}

export default App;
