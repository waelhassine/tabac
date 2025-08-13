'use client';

import { useRouter } from 'next/navigation';

export default function PGPage() {
  const router = useRouter();

  const handleCreateEntry = () => {
    router.push('/dashboard/pg/create');
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            PG - Gestion des Processus
          </h1>
          <p className="text-gray-600">
            Centre de contrôle et gestion des processus - Usine B
          </p>
        </div>
        <button
          onClick={handleCreateEntry}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Créer Nouvelle Entrée
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Statut Système</h3>
          <p className="text-2xl font-bold text-green-600">Opérationnel</p>
          <p className="text-sm text-gray-500 mt-1">Tous systèmes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Processus Actifs</h3>
          <p className="text-2xl font-bold text-blue-600">12/15</p>
          <p className="text-sm text-gray-500 mt-1">En cours</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-medium text-gray-900 mb-2">Performance</h3>
          <p className="text-2xl font-bold text-purple-600">98.5%</p>
          <p className="text-sm text-gray-500 mt-1">Globale</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Centre de Contrôle PG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Processus Critiques</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                <span className="text-sm">Traitement Principal</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">OK</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                <span className="text-sm">Filtration</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">OK</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="text-sm">Séchage</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">ATTENTION</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Alertes Système</h3>
            <div className="space-y-2">
              <div className="p-2 bg-blue-50 rounded">
                <p className="text-sm text-blue-800">Maintenance préventive programmée</p>
                <p className="text-xs text-blue-600">Demain 08:00</p>
              </div>
              <div className="p-2 bg-yellow-50 rounded">
                <p className="text-sm text-yellow-800">Température élevée - Secteur 3</p>
                <p className="text-xs text-yellow-600">Surveillance renforcée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}