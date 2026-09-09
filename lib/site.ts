export const site = {
  name: "Dr. Swami Karri",
  fullName: "Dr. Karri Swami",
  credentials: "MBBS, DNB (Radio Diagnosis)",
  title: "Senior Consultant Radiologist & Healthcare Entrepreneur",
  location: "Visakhapatnam (Vizag), India",
  // TODO: Replace with the real WhatsApp number (international format, no "+").
  whatsappNumber: "919876543210",
  whatsappMessage:
    "Hello Dr. Swami, I would like to book an appointment / know more about a service.",
  whatsappUrl: () =>
    `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      site.whatsappMessage
    )}`,
  socials: {
    // TODO: Replace with the real profile URLs.
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};