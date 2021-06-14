import Close from "../Close";

const Work = ({
  onCloseArticle,
  article,
  articleTimeout,
  work,
}) => (
  <article id="work" className={`${article === 'work' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Work</h2>
    {work && work.map(({
      yearStart,
      yearEnd,
      name,
      positions,
      description,
    }, idx) => (
        <div className="col-md-6 w-grid">
            <div className="work-grid">
                <h2>{yearStart} - {yearEnd ? yearEnd : 'Current'}</h2>
                <div className="work-grid-info">
                    <h3>{name}</h3>
                    {positions.map(position => <h5 key={position}>{position}</h5>)}
                    <p>{description}</p>
                </div>
            </div>
        </div>))}
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Work;
