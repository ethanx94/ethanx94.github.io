import Close from "../Close";

const Intro = ({
  onCloseArticle,
  article,
  articleTimeout,
  about,
}) => (
  <article id="intro" className={`${article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Intro</h2>
    <p>{about}</p>
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Intro;
