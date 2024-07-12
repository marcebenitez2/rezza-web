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
import { useState, useEffect, useMemo } from "react";

export const CategoryDialog = ({
  collectionName,
  category,
}: {
  collectionName: string;
  category?: any;
}) => {
  const initialFormData = useMemo(
    () => ({
      title: "",
      image: null,
    }),
    []
  );

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (category) {
      setFormData({
        title: category.title || "",
        image: category.image || null,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [category, initialFormData]);

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
      if (category) {
        // Si estamos editando una categoría
        await updateDocument(collectionName, category.id, formData);
        console.log("Categoría editada:", formData);
      } else {
        // Si estamos agregando una nueva categoría
        await addDocument(collectionName, formData);
        console.log("Categoría agregada:", formData);
      }
    } catch (error) {
      console.error("Error al agregar/editar la categoría:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${category ? "" : "absolute right-3 lg:right-60 top-24"}`}>
          {category ? "Editar" : "Agregar"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {category
              ? "Editar categoría"
              : `Agregar documento en: ${collectionName}`}
          </DialogTitle>
          <DialogDescription className="text-center">
            Debe recargar la página para ver los cambios una vez{" "}
            {category ? "editado" : "agregado"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Label>
            Titulo
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Imagen
            <Input type="file" name="image" onChange={handleInputChange} />
          </Label>
          <Button className="w-full mt-4" type="submit">
            {category ? "Editar" : "Agregar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
