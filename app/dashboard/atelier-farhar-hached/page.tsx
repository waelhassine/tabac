'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AtelierFarharHachedPage() {
  const router = useRouter();

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Atelier Farhar Hached
          </h1>
          <p className="text-gray-600">
            Gestion et monitoring de l'Atelier Farhar Hached - Zone A
          </p>
        </div>
        <Button 
          onClick={() => router.push('/dashboard/atelier-farhar-hached/create')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Créer Nouvelle Entrée
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Statut Production</h3>
          <p className="text-2xl font-bold text-yellow-600">Maintenance</p>
          <p className="text-sm text-gray-500 mt-1">Depuis 10:00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Déchets Traités</h3>
          <p className="text-2xl font-bold text-blue-600">0 kg</p>
          <p className="text-sm text-gray-500 mt-1">Aujourd'hui</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Efficacité</h3>
          <p className="text-2xl font-bold text-gray-400">--</p>
          <p className="text-sm text-gray-500 mt-1">Hors service</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Détails de l'Atelier Farhar Hached</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-yellow-800 font-medium">Atelier en maintenance programmée</p>
          </div>
          <p className="text-yellow-700 text-sm mt-1">Retour en service prévu: 14:00</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Température</label>
              <p className="text-lg font-semibold text-gray-400">--</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Humidité</label>
              <p className="text-lg font-semibold text-gray-400">--</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pression</label>
              <p className="text-lg font-semibold text-gray-400">--</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Débit</label>
              <p className="text-lg font-semibold text-gray-400">--</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}