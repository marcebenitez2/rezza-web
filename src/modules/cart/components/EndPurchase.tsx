import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CartItem } from "@/shared/stores/CartStore";
import React from "react";

export const EndPurchase = ({ data }: { data: CartItem[] }) => {
  // Calcular el total a pagar
  const total = data.reduce((acc, item) => acc + item.cant * item.price, 0);

  // Construir el mensaje para WhatsApp
  const buildWhatsAppMessage = () => {
    const itemsList = data
      .map((item) => `${item.title} (Cantidad: ${item.cant})`)
      .join(", ");
    const message = `Hola, quería realizar un pedido de: ${itemsList} con un total de: $${total}`;
    return message;
  };

  // Crear la URL de WhatsApp
  const whatsappUrl = `https://wa.me/5493412597674?text=${encodeURIComponent(
    buildWhatsAppMessage()
  )}`;

  // Manejar el clic del botón
  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col w-full gap-4 py-4 max-w-6xl lg:flex-row-reverse">
      {/* Aca se diria el precio */}
      <div className="flex flex-col items-center gap-2 w-full">
        <Label className="text-lg">Total a pagar:</Label>
        <span className="text-3xl font-semibold">${total}</span>
      </div>

      {/*  aca Estarian los botones para enviar el pedido por wsp y el input para dejar el telefono */}
      <div className="flex flex-col items-center gap-6 w-full">
        <Button
          onClick={handleClick}
          className="py-8 text-xl flex gap-3 w-full"
        >
          Enviar pedido por WhatsApp
          <img src={"/wspLogo.png"} className="w-8" />
        </Button>
        <span className="text-2xl font-semibold">O dejanos</span>
        <div className="w-full flex flex-col gap-2">
          <Label>Tu correo</Label>
          <Input type="email" placeholder="usuario@gmail.com" />
          <Label>Y tu numero</Label>
          <Input type="text" placeholder="3412597674" />
          <Button className="w-full text-xl py-8">Enviar pedido</Button>
        </div>
      </div>
    </div>
  );
};
