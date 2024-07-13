import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteDocument } from "@/services/firebase/firestore/firestore";
import { useState } from "react";

export const DeleteDialog = ({
  collectionName,
  id,
  onSuccess,
}: {
  collectionName: string;
  id: string;
  onSuccess?: () => void;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!id) {
      setError("Error: ID de documento vacío");
      return;
    }

    setIsDeleting(true);
    setError(null);
    try {
      const success = await deleteDocument(collectionName, id);
      if (success) {
        console.log(`Documento con ID ${id} eliminado de ${collectionName}`);
        if (onSuccess) onSuccess(); // Llamar al callback si se proporciona
      } else {
        setError("Error al eliminar el documento");
      }
    } catch (error) {
      setError("Error al eliminar el documento");
      console.error("Error eliminando el documento:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={isDeleting}>Eliminar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro de eliminar?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {error && <p className="text-red-500">{error}</p>}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Eliminando..." : "Eliminar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
