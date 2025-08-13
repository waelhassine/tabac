"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginForm {
  username: string;
  password: string;
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      console.log("Connexion:", data);
       router.push("/dashboard");
    
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex" dir="ltr">
      {/* Left Side - Login Form */}
      <div className="w-1/2 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header with Logos */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Image
                src="/tunisien goverment.png"
                alt="Gouvernement Tunisien"
                width={60}
                height={60}
                className="object-contain"
              />
              <Image
                src="/minister des finanaces.png"
                alt="Ministère des Finances"
                width={60}
                height={60}
                className="object-contain"
              />
              <Image
                src="/rnta.png"
                alt="RNTA"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
           Systeme intégré de gestion des déchets (SIGD-RNTA)
            </h1>
         
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Connexion
              </h2>
              <p className="text-gray-600 text-sm">
                Entrez vos identifiants pour accéder au système
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  rules={{
                    required: "Le nom d'utilisateur est requis",
                    minLength: {
                      value: 3,
                      message: "Le nom d'utilisateur doit contenir au moins 3 caractères"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left block">
                        Nom d'utilisateur
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez votre nom d'utilisateur"
                          className="text-left"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  rules={{
                    required: "Le mot de passe est requis",
                    minLength: {
                      value: 6,
                      message: "Le mot de passe doit contenir au moins 6 caractères"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left block">
                        Mot de passe
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Entrez votre mot de passe"
                          className="text-left"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Mot de passe oublié?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion en cours..." : "Se connecter"}
                </Button>
              </form>
            </Form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Vous n'avez pas de compte?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                  Contacter l'administration
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-xs text-gray-500">
            <p>© 2024 Usine d'Optimisation des Déchets de Tabac</p>
            <p>Tous droits réservés - République Tunisienne</p>
          </div>
        </div>
      </div>

      {/* Right Side - Tobacco Manufacturing */}
       <div className="w-1/2 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
        <Image
          src="/tabac.jpg"
          alt="Tobacco Manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">Régle Nationale des tabacs et des Allumettes</h2>
          
          </div>
        </div>
      </div>
     
    </div>
  );
}
