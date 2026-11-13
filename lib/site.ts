export const site = {
  name: "Dr. Swamy Karri",
  fullName: "Dr. Karri Swamy",
  credentials: "MBBS, DNB (Radio Diagnosis)",
  title: "Senior Consultant Radiologist & Healthcare Entrepreneur",
  location: "Visakhapatnam (Vizag), India",
  phone: "+91 94411 45312",
  whatsappNumber: "919441145312",
  whatsappMessage:
    "Hello Dr. Swamy, I would like to book an appointment / know more about a service.",
  whatsappUrl: () =>
    `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      site.whatsappMessage
    )}`,
  socials: {
    // TODO: Replace with the real profile URLs.
    instagram: "https://www.instagram.com/swamykarri?stkn=MWhjaHNnbXdzeDRhbQ==",
    facebook: "https://www.facebook.com/swamyk20/",
  },
};