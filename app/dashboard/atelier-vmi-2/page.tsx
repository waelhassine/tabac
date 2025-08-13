'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface AtelierData {
  consommationScaferlati: number;
  stockCigarettes: number;
  cigarettesEnvoyeesQuantite: number;
  cigarettesEnvoyeesDestination: string;
  cigarettesRecuesQuantite: number;
  cigarettesRecuesSource: string;
  poidsCigarette: number;
  productionPaquets: number;
  dechireuse: string;
  typeDechetsBoudins: string;
  typeDechetsQuantite: number;
  dateReintroduction: string;
  depoussierage: string;
  quantitePoussiere: number;
}

function generateRandomData(): AtelierData {
  const destinations = ['Atelier VMI 1', 'Atelier VML 1', 'Atelier VML 2', 'Stock Principal'];
  const sources = ['Atelier PG', 'Atelier VMI 1', 'Stock Externe', 'Production Interne'];
  const dechireuseTypes = ['VMI2-A', 'VMI2-B', 'VMI2-C'];
  const dechetTypes = ['Boudins', 'Cigarettes défectueuses', 'Résidus de production'];
  const depoussiérageTypes = ['Uni Mater A', 'Uni Mater B', 'Système Standard'];
  
  const today = new Date();
  const randomDate = new Date(today.getTime() - Math.random() * 7 * 24 * 60 * 60 * 1000);
  
  return {
    consommationScaferlati: Math.round((Math.random() * 500 + 100) * 100) / 100,
    stockCigarettes: Math.round(Math.random() * 10000 + 5000),
    cigarettesEnvoyeesQuantite: Math.round(Math.random() * 3000 + 1000),
    cigarettesEnvoyeesDestination: destinations[Math.floor(Math.random() * destinations.length)],
    cigarettesRecuesQuantite: Math.round(Math.random() * 2000 + 500),
    cigarettesRecuesSource: sources[Math.floor(Math.random() * sources.length)],
    poidsCigarette: Math.round((Math.random() * 2 + 0.5) * 1000) / 1000,
    productionPaquets: Math.round(Math.random() * 5000 + 2000),
    dechireuse: dechireuseTypes[Math.floor(Math.random() * dechireuseTypes.length)],
    typeDechetsBoudins: dechetTypes[Math.floor(Math.random() * dechetTypes.length)],
    typeDechetsQuantite: Math.round((Math.random() * 50 + 10) * 100) / 100,
    dateReintroduction: randomDate.toISOString().split('T')[0],
    depoussierage: depoussiérageTypes[Math.floor(Math.random() * depoussiérageTypes.length)],
    quantitePoussiere: Math.round((Math.random() * 20 + 5) * 100) / 100
  };
}

export default function AtelierVMI2Page() {
  const router = useRouter();
  const [data, setData] = useState<AtelierData | null>(null);

  useEffect(() => {
    setData(generateRandomData());
  }, []);

  if (!data) {
    return <div className="p-6">Chargement...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Atelier VMI 2
          </h1>
          <p className="text-gray-600">
            Gestion et monitoring de l'Atelier VMI 2 - Zone A
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => setData(generateRandomData())}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Actualiser Données
          </Button>
          <Button 
            onClick={() => router.push('/dashboard/atelier-vmi-2/create')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Créer Nouvelle Entrée
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Statut Production</h3>
          <p className="text-2xl font-bold text-green-600">Actif</p>
          <p className="text-sm text-gray-500 mt-1">Depuis 07:30</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Production Paquets</h3>
          <p className="text-2xl font-bold text-blue-600">{data.productionPaquets.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">Aujourd'hui</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Consommation Scaferlati</h3>
          <p className="text-2xl font-bold text-purple-600">{data.consommationScaferlati} kg</p>
          <p className="text-sm text-gray-500 mt-1">Aujourd'hui</p>
        </div>
      </div>

      {/* Production Data */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Données de Production</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock en Cours de Cigarettes</label>
            <p className="text-lg font-semibold text-gray-900">{data.stockCigarettes.toLocaleString()}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Poids de cigarette</label>
            <p className="text-lg font-semibold text-gray-900">{data.poidsCigarette} kg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cigarettes Envoyées</label>
            <p className="text-lg font-semibold text-gray-900">{data.cigarettesEnvoyeesQuantite.toLocaleString()}</p>
            <p className="text-sm text-gray-500">vers {data.cigarettesEnvoyeesDestination}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cigarettes Reçues</label>
            <p className="text-lg font-semibold text-gray-900">{data.cigarettesRecuesQuantite.toLocaleString()}</p>
            <p className="text-sm text-gray-500">de {data.cigarettesRecuesSource}</p>
          </div>
        </div>
      </div>

      {/* Waste Recovery Data */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Suivi de récupération - Déchireuse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Déchireuse</label>
            <p className="text-lg font-semibold text-gray-900">{data.dechireuse}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type de déchets traités</label>
            <p className="text-lg font-semibold text-gray-900">{data.typeDechetsBoudins}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantité traitée</label>
            <p className="text-lg font-semibold text-gray-900">{data.typeDechetsQuantite} kg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date de réintroduction</label>
            <p className="text-lg font-semibold text-gray-900">{new Date(data.dateReintroduction).toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>

      {/* Dust Removal Data */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Dépoussiérage ou Uni Mater</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Système de Dépoussiérage</label>
            <p className="text-lg font-semibold text-gray-900">{data.depoussierage}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantité de poussière</label>
            <p className="text-lg font-semibold text-gray-900">{data.quantitePoussiere} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}