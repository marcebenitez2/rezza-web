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
  updateDocument,
  getCollection,
  addDocument,
} from "@/services/firebase/firestore/firestore";
import { useState, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ClipLoader from "react-spinners/ClipLoader";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { IProducts } from "@/shared/types/productsQueryTypes";
import { uploadFile } from "@/services/firebase/storage/storage";

interface ProductDialogProps {
  collectionName: string;
  product?: IProducts;
}

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const ProductDialog: React.FC<ProductDialogProps> = ({
  collectionName,
  product,
}) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);

  const initialFormData: IProducts = useMemo(
    () => ({
      title: product?.title || "",
      description: product?.description || "",
      category: product?.category || "",
      price: product?.price || 0,
      main_image: product?.main_image || "",
      offer: product?.offer || 0,
      best_selling: product?.best_selling || false,
      featured_product: product?.featured_product || false,
      slug: product?.slug || "",
    }),
    [product]
  );


  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCollection("categories");
        const formattedCategories: ICategory[] = fetchedCategories.map(
          (category: any) => ({
            id: category.id,
            title: category.title,
            image: category.image,
          })
        );
        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState<IProducts>(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setNewImageFile(files ? files[0] : null);
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });

      if (name === "title") {
        setFormData((prevData) => ({
          ...prevData,
          slug: generateSlug(value),
        }));
      }
    }
  };

  const handleCategoryChange = (categoryTitle: string) => {
    setFormData({
      ...formData,
      category: categoryTitle,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Primero validamos si se trata de una carga o una actualizacion
      if (product) {
        // En caso que sea una actualizacion, cargamos la imagen nueva a storage

        // Primero revisamos si se cambio la imagen
        if (newImageFile) {
          const urlImagenNueva = await uploadFile(
            newImageFile,
            `/images/${newImageFile?.name}`
          );

          // Actualizamos el documento
          await updateDocument("products", product.id, {
            ...formData,
            main_image: urlImagenNueva,
          });
        } else {
          await updateDocument("products", product.id, formData);
        }

      } else {
        // En caso que sea una carga, cargamos la imagen a storage
        const urlImagen = uploadFile(
          newImageFile,
          `/images/${newImageFile?.name}`
        );

        // Agregamos un nuevo documento
        await addDocument("products", {
          ...formData,
          main_image: urlImagen,
        });
      }
    } catch (error) {
      console.error("Error updating document:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`${product ? "" : "absolute right-3 lg:right-60 top-24"}`}
        >
          {product ? "Editar" : "Agregar"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={50} />
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center">
                {product
                  ? `Editar producto en: ${collectionName}`
                  : `Agregar documento en: ${collectionName}`}
              </DialogTitle>
              <DialogDescription className="text-center">
                Debe recargar la página para ver los cambios una vez{" "}
                {product ? "editado" : "agregado"}
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
                Categoria
                <Select
                  onValueChange={handleCategoryChange}
                  value={formData.category}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.title}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Label>
              <Label>
                Descripcion
                <Input
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Descripción del producto"
                />
              </Label>
              <Label>
                Precio
                <Input
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  type="number"
                />
              </Label>
              <Label>
                Imagen
                <Input
                  type="file"
                  name="main_image"
                  onChange={handleInputChange}
                />
              </Label>
              <Label>
                Oferta
                <Input
                  name="offer"
                  value={formData.offer}
                  onChange={handleInputChange}
                  placeholder="Oferta del producto"
                  type="number"
                />
              </Label>
              <div className="flex gap-10">
                <Label>
                  Más vendido
                  <Input
                    type="checkbox"
                    name="best_selling"
                    checked={formData.best_selling}
                    onChange={handleInputChange}
                  />
                </Label>
                <Label>
                  Producto destacado
                  <Input
                    type="checkbox"
                    name="featured_product"
                    checked={formData.featured_product}
                    onChange={handleInputChange}
                  />
                </Label>
              </div>

              <Button className="w-full mt-4" type="submit">
                {product ? "Guardar cambios" : "Agregar"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
