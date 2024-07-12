"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
  getCollection,
  updateDocument,
} from "@/services/firebase/firestore/firestore";
import { useState, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/shared/types/categoriesQueryTypes";

export const ProductDialog = ({
  collectionName,
  product,
}: {
  collectionName: string;
  product?: any;
  categories?: any[];
}) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const initialFormData = useMemo(
    () => ({
      title: "",
      description: "",
      category: "",
      price: "",
      main_image: null,
      offer: "",
      best_selling: false,
      featured_product: false,
    }),
    []
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

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        description: product.description || "",
        category: product.category || "",
        price: product.price || "",
        main_image: product.main_image || null,
        offer: product.offer || "",
        best_selling: product.bestSelling || false,
        featured_product: product.featuredProduct || false,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [product, initialFormData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files && files[0]
          : value,
    });
  };

  const handleCategoryChange = (categoryTitle: string) => {
    setFormData({
      ...formData,
      category: categoryTitle,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form data:", formData);

    try {
      if (product) {
        // Si estamos editando un producto
        await updateDocument(collectionName, product.id, formData);
      } else {
        // Si estamos agregando un nuevo producto
        await addDocument(collectionName, formData);
      }
    } catch (error) {
      console.error("Error al agregar/editar el producto:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${product ? "" : "absolute right-3  lg:right-60 top-24"}`}>
          {product ? "Editar" : "Agregar"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {product
              ? "Editar producto"
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
              onValueChange={(categoryTitle: string) =>
                handleCategoryChange(categoryTitle)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((category) => (
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
            <Input type="file" name="main_image" onChange={handleInputChange} />
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
          {product ? (
            <DialogClose asChild>
              <Button type="submit" className="w-full mt-4">
                Editar
              </Button>
            </DialogClose>
          ) : (
            <Button className="w-full mt-4" type="submit">
              Agregar
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
