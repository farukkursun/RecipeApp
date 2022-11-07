import "./Footer.css";
import designSvg from '../../assets/design.svg'
const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/farukkursun"
        target="blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
       <i className="barand"> {"<Faruk>"} </i>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span> Copyright {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
