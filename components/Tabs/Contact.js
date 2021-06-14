import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

import Close from "../Close";

const Contact = ({
  onCloseArticle,
  article,
  articleTimeout,
}) => (
  <article id="contact" className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Contact</h2>
    <div className="field half first">
      <label htmlFor="name">Email</label>
      <p>
        <a href="mailto:ethanx94@gmail.com">ethanx94@gmail.com</a>
      </p>
    </div>
    <div className="field">
      <p>
        Further information can be found on my resume:{' '}<a href="https://goo.gl/sKcNiQ">View Resume</a>
      </p>
    </div>
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Contact;
