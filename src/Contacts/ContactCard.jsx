import "./ContactCard.css";
import { Link } from "react-router-dom";

const ContactCard = ({
  id,
  name,
  slogan,
  image,
  lastConnection,
  lastMessage,
  className = "",
  nameClass = "",
  sloganClass = "",
  imageClass = "",
  lastMessageClass = "",
  lastConnectionClass = "",
}) => {
  return (
    <div className={`contact-card ${className}`}>
  <div className="name-slogan-container">
    <Link to={`/contact/${id}`}>
    <img className={`contact-image ${imageClass}`} src={image} alt={`image of ${name}`} />
  </Link>
    <Link to={`/chat/${id}`} className="contact-name-link">
      <h2 className={nameClass}>{name}</h2>
    </Link>
</div>
<span className={sloganClass}>{slogan}</span>
      <div className="last-message-time">
        <p className={lastMessageClass}>{lastMessage}</p>
        <span className={`last-connection ${lastConnectionClass}`}>{lastConnection}</span>
      </div>
    </div>
  );
};

export default ContactCard;