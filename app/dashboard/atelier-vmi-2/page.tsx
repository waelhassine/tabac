'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AtelierVMI2Page() {
  const router = useRouter();

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
        <Button 
          onClick={() => router.push('/dashboard/atelier-vmi-2/create')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Créer Nouvelle Entrée
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Statut Production</h3>
          <p className="text-2xl font-bold text-green-600">Actif</p>
          <p className="text-sm text-gray-500 mt-1">Depuis 07:30</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Déchets Traités</h3>
          <p className="text-2xl font-bold text-blue-600">523 kg</p>
          <p className="text-sm text-gray-500 mt-1">Aujourd'hui</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Efficacité</h3>
          <p className="text-2xl font-bold text-purple-600">96.1%</p>
          <p className="text-sm text-gray-500 mt-1">Performance</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Détails de l'Atelier VMI 2</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Température</label>
              <p className="text-lg font-semibold text-gray-900">24°C</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Humidité</label>
              <p className="text-lg font-semibold text-gray-900">42%</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pression</label>
              <p className="text-lg font-semibold text-gray-900">1.3 bar</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Débit</label>
              <p className="text-lg font-semibold text-gray-900">16.2 m³/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}