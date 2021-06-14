import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import PropTypes from 'prop-types';

const Footer = ({ timeout }) => (
    <footer id="footer" style={timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
                <a href="https://github.com/ethanx94">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/ethan-richardson-854214b5">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/eastcoastcoder">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
