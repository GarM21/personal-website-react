import gitHub from "./../../img/icons/gitHub.svg"
import instagram from "./../.././img/icons/instagram.svg"
import telegram from "./../../img/icons/icon-telegram.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/GarM21" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://t.me/garm_21" target="_blank" rel="noreferrer"><img src={telegram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://instagram.com/21garm?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><img src={instagram} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 garmdev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;