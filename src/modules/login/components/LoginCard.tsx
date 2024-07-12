"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/shared/stores/UserStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginAdmin } from "../../../services/firebase/auth/auth";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useUserStore();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el envío estándar del formulario

    if (email.length === 0 || password.length === 0) {
      toast.error("Por favor complete todos los campos");
      return;
    }

    try {
      const user: any = await loginAdmin(email, password);

      if (user.accessToken) {
        setUser(user.email ?? "");
        router.push("/admin/products");
      }
    } catch (error) {
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <Card className="w-full max-w-xl shadow-2xl">
      <form onSubmit={handleLogin}>
        <CardHeader>
          <CardTitle className="text-center">Iniciar sesión</CardTitle>
          <CardDescription className="text-center">
            Acceda al panel de administrador
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label>
            Email
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </Label>
          <Label>
            Contraseña
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Iniciar sesión
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
