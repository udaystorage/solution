export const openWhatsApp = (message) => {
  const phoneNumber = "918100025936";

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank",
    "noopener,noreferrer"
  );
};