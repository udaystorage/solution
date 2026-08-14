export const openWhatsApp = (message) => {
  const contact = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

  const phoneNumber= contact?.replace(/\D/g, "");  

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank",
    "noopener,noreferrer"
  );
};