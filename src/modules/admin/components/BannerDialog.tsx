"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addDocument,
  updateDocument,
} from "@/services/firebase/firestore/firestore"; // Asumiendo que tienes estas funciones
import { IBanners } from "@/shared/types/bannersQueryTypes";
import { useState, useEffect, useMemo } from "react";

export const BannerDialog = ({
  collectionName,
  banner,
}: {
  collectionName: string;
  banner?: IBanners;
}) => {
  const initialFormData = useMemo(
    () => ({
      alt: "",
      responsive_banner: "",
      banner: "",
    }),
    []
  );

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (banner) {
      setFormData({
        alt: banner.alt || "",
        responsive_banner: banner.responsive_banner || "",
        banner: banner.banner || "",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [banner, initialFormData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files && files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form data:", formData);

    try {
      if (banner) {
        // Si estamos editando un banner
        await updateDocument(collectionName, banner.id, formData);
        console.log("Banner editado:", formData);
      } else {
        // Si estamos agregando un nuevo banner
        await addDocument(collectionName, formData);
        console.log("Banner agregado:", formData);
      }
    } catch (error) {
      console.error("Error al agregar/editar el banner:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${banner ? "" : "absolute right-3 lg:right-60 top-24"}`}>
          {banner ? "Editar" : "Agregar"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {banner
              ? "Editar banner"
              : `Agregar documento en: ${collectionName}`}
          </DialogTitle>
          <DialogDescription className="text-center">
            Debe recargar la página para ver los cambios una vez{" "}
            {banner ? "editado" : "agregado"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Label>
            Alt
            <Input
              name="alt"
              value={formData.alt}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Responsive Banner
            <Input
              type="file"
              name="responsive_banner"
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Banner
            <Input type="file" name="banner" onChange={handleInputChange} />
          </Label>
          <Button className="w-full mt-4" type="submit">
            {banner ? "Editar" : "Agregar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
