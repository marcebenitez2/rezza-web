import { localProvider } from "@/providers/localProvider";
import emailjs from "emailjs-com";

const sendEmail = async (
  email: string,
  phone: string,
  total: number,
  cart: string
) => {
  const serviceID = "service_o4buraz";
  const templateID = "template_gu6u1it";
  const publicKey = "7gzaf84yyPSu07Wfm";

  const templateParams = {
    email_from: email,
    tel_from: phone,
    total: total.toString(),
    cart,
  };

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );

    return response;
  } catch (error) {
    console.error("Error al enviar el email:", error);
    throw error;
  }
};

export default sendEmail;
