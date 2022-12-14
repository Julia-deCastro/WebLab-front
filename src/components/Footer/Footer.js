import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <menubar className="Footer-menu">
        <div className="Footer-first-line">
          <img className="Footer-image" src="images/logo_ufmg_branca.png" alt="Logo-ufmg" />
          <p className="Fotter-p2">SDF</p>
          <div className="Footer-eita">
            <p className="Fotter-p2">EITA!</p>
            <a>ESPAÇO DE INOVAÇÃO, TECNOLOGIA E </a>
            <a>APRENDIZADO
            </a>
          </div>
          <div className="Footer-social-medias">
            <p className="Fotter-p3">Redes Sociais</p>
            <div className="Footer-icons">
              <InstagramIcon />
              <FacebookIcon />
              <MailOutlineIcon />
            </div>
          </div>
        </div>
        <div className="Footer-bar-outside">
          <div className="Footer-bar" />
        </div>
        <div className="Footer-second-line">
          <p>Av. Antônio Carlos, 6627, Pampulha - Belo Horizonte - MG - CEP 31270-901</p>
        </div>
      </menubar>
      <div className="Footer-copyright">
        <CopyrightIcon className="Footer-icon-copyright" />
        <p>2023 Universidade Federal de Minas Gerais. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
