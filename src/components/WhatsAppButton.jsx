function WhatsAppButton() {
  const phoneNumber = "03266719872";

  const message =
    "Hello Najia Group, I would like to get more information.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;