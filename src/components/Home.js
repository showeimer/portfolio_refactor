import React from 'react';

import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

const Home = () => {
  return (
    <div>
      <section className="jumbotron">
        <h2 className="display-4">Sho Weimer</h2>
        <hr className="my-3" />
        <h3 className="lead">Full-Stack Web Developer</h3>

        <ul className="skillsList lead">
          <li id="frontEnd">Front-End
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>jQuery</li>
              <li>AJAX</li>
            </ul>
          </li>

          <li>Back-End
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>PostgreSQL</li>
              <li>REST API</li>
            </ul>
          </li>
        </ul>

      </section>

      <footer>
        <img className="icon" src={github} alt="" />
        <img className="icon" src={linkedin} alt="" />

        {/* <a href="https://github.com/showeimer"><img className="icon" src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/sho-weimer/"><img className="icon" src={linkedin} alt="" /></a> */}
      </footer>
    </div>
  )
}

export default Home;
