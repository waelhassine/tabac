'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

type FormData = {
  consommationScaferlati: string;
  stockCigarettes: string;
  cigarettesEnvoyeesQuantite: string;
  cigarettesEnvoyeesDestination: string;
  cigarettesRecuesQuantite: string;
  cigarettesRecuesSource: string;
  poidsCigarette: string;
  productionPaquets: string;
  dechireuse: string;
  typeDechetsBoudins: string;
  typeDechetsQuantite: string;
  dateReintroduction: string;
  depoussierage: string;
  quantitePoussiere: string;
};

export default function CreateAtelierVMI1Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      consommationScaferlati: '',
      stockCigarettes: '',
      cigarettesEnvoyeesQuantite: '',
      cigarettesEnvoyeesDestination: '',
      cigarettesRecuesQuantite: '',
      cigarettesRecuesSource: '',
      poidsCigarette: '',
      productionPaquets: '',
      dechireuse: '',
      typeDechetsBoudins: '',
      typeDechetsQuantite: '',
      dateReintroduction: '',
      depoussierage: '',
      quantitePoussiere: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data submitted:', data);
    
    // Redirect back to atelier page
    router.push('/dashboard/atelier-vmi-1');
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Créer Nouvelle Entrée - Atelier VMI 1
        </h1>
        <p className="text-gray-600">
          Saisie des données de production pour l'Atelier VMI 1
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Consommation scaferlati */}
            <FormField
              control={form.control}
              name="consommationScaferlati"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Consommation scaferlati en KG</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez la consommation en KG" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stock en Cours de Cigarettes */}
            <FormField
              control={form.control}
              name="stockCigarettes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock en Cours de Cigarettes</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le stock actuel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cigarettes envoyées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cigarettesEnvoyeesQuantite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cigarettes envoyées - Quantité</FormLabel>
                    <FormControl>
                      <Input placeholder="Quantité" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cigarettesEnvoyeesDestination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cigarettes envoyées - Destination</FormLabel>
                    <FormControl>
                      <Input placeholder="Destination" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Cigarettes reçues */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cigarettesRecuesQuantite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cigarettes reçues - Quantité</FormLabel>
                    <FormControl>
                      <Input placeholder="Quantité" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cigarettesRecuesSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cigarettes reçues - Source</FormLabel>
                    <FormControl>
                      <Input placeholder="Source" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Poids de cigarette et Production */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="poidsCigarette"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poids de cigarette en Kg</FormLabel>
                    <FormControl>
                      <Input placeholder="Poids en Kg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productionPaquets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Production en paquets</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de paquets" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Suivi de récupération - Déchireuse */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivi de récupération - Déchireuse</h3>
              
              <FormField
                control={form.control}
                name="dechireuse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Déchireuse (VMI1)</FormLabel>
                    <FormControl>
                      <Input placeholder="Informations déchireuse" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="typeDechetsBoudins"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de déchets traités (Boudins/Cigarettes)</FormLabel>
                      <FormControl>
                        <Input placeholder="Type de déchets" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="typeDechetsQuantite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantité traitée en KG</FormLabel>
                      <FormControl>
                        <Input placeholder="Quantité en KG" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateReintroduction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de réintroduction</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Dépoussiérage */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dépoussiérage ou Uni Mater</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="depoussierage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dépoussiérage</FormLabel>
                      <FormControl>
                        <Input placeholder="Informations dépoussiérage" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantitePoussiere"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantité de poussière en KG</FormLabel>
                      <FormControl>
                        <Input placeholder="Quantité en KG" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/dashboard/atelier-vmi-1')}
              >
                Annuler
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}