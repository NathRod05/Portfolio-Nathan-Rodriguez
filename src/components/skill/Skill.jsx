import "./skill.css";

function Skill() {
  return (
    <div className="skill-container" id="skill">
      <div className="skill">
        <h1>Compétences</h1>
      </div>
      <div className="icon-container">
        <div className="skill-flex">
          <i className="devicon-html5-plain colored icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-css3-plain colored icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-sass-original colored icon"></i>
          <p>Sass</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-javascript-plain colored icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-react-original colored icon"></i>
          <p>React</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-redux-original colored icon"></i>
          <p>Redux</p>
        </div>
        {/* <div className="skill-flex">
          <i className="devicon-nodejs-plain colored icon"></i>
          <p>Node.js</p>
        </div> */}
        <div className="skill-flex">
          <i className="devicon-figma-plain colored icon"></i>
          <p>Figma</p>
        </div>
        {/* <div className="skill-flex">
          <i className="devicon-postman-plain colored icon"></i>
          <p>Postman</p>
        </div> */}
        <div className="skill-flex">
          <i className="devicon-swagger-plain colored icon"></i>
          <p>Swagger</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-mongodb-plain colored icon"></i>
          <p>MongoDB</p>
        </div>
        <div className="skill-flex">
          <i className="devicon-github-original icon"></i>
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
