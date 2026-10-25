
export const openWhatsApp = (message) => {
  const contact = process.env.NEXT_PUBLIC_CONTACT_NUMBER;
  const phoneNumber = contact?.replace(/\D/g, "");

  if (!phoneNumber) {
    throw new Error("WhatsApp contact number is not configured.");
  }

  const encodedMessage = encodeURIComponent(
    `Hi Data Treasure team 👋! ${message}`
  );

  const url =
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
