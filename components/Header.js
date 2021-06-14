import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = ({ onOpenArticle, timeout }) => (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="logo" src="/static/images/1.png" alt="" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ethan Richardson</h1>
                <p>Associate Software Developer based in Myrtle Beach, South Carolina</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => onOpenArticle('intro')}>Intro</a></li>
                <li><a href="#" onClick={() => onOpenArticle('work')}>Work</a></li>
                <li><a href="#" onClick={() => onOpenArticle('skills')}>Skills</a></li>
                <li><a href="#" onClick={() => onOpenArticle('contact')}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
