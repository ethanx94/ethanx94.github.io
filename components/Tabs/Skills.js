import Close from "../Close";

const Skills = ({
  onCloseArticle,
  article,
  articleTimeout,
  edu,
}) => (
  <article id="skills" className={`${article === 'skills' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Skills</h2>
    <p>I specialize in writing React and React Native web and mobile applications. Here are just a few programming languages I am also familiar with:</p>
    <ul>
      <li>JavaScript</li>
      <li>C# / .Net</li>
      <li>Python</li>
      <li>SQL</li>
    </ul>
    <h2 className="major">Education</h2>
    {edu && edu.map(({
      name,
      yearStart,
      yearEnd,
      degrees,
      location,
    }) => (
        <div key={name} class="col-md-6 edu-grid">
          <div class="edu-border">
              <div class="edu-grid-master">
                  <h2>{yearStart} - {yearEnd}</h2>
                  <h3>{name} {location} </h3>
                  {degrees.map(degree => <h5 key={degree}>{degree}</h5>)}
              </div>
          </div>
        </div>
      ))}
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Skills;
