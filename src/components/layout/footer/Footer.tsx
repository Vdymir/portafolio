import { FooterCont } from './footer.styled'
import fb from '../../../assets/facebook.png'
import ig from '../../../assets/instagram.png'
import lnk from '../../../assets/linkedin.png'
import wpp from '../../../assets/whatsapp.png'
import { URL_REDES } from '../../../config'


const Footer = () => {
    return (
        <FooterCont id='contact'>
            <h3>Puedes contactarme por medio de estas redes sociales</h3>
            <ul>
                <li>
                    <img src={fb} alt="IMG: https://www.flaticon.com/" onClick={() => window.open(URL_REDES.fb)}/>
                </li>
                <li>
                    <img src={ig} alt="IMG: https://www.flaticon.com/" onClick={() => window.open(URL_REDES.ig)}/>
                </li>
                <li>
                    <img src={lnk} alt="IMG: https://www.flaticon.com/" onClick={() => window.open(URL_REDES.lnk)}/>
                </li>
                <li>
                    <img src={wpp} alt="IMG: https://www.flaticon.com/" onClick={() => window.open(URL_REDES.wpp)}/>
                </li>
            </ul>
        </FooterCont>
    )
}

export default Footer
