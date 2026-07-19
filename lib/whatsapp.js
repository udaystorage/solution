export const openWhatsApp = (message) => {
  const phoneNumber = "919876543210";

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank",
    "noopener,noreferrer"
  );
};