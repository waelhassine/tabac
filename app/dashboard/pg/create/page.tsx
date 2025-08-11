'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PGFormData {
  selectedSection: string;
  // Section 1: Tabac à l'entrée - Strips (Slicer)
  // Virginie
  virginieQuantite: number;
  virginieCategorie: string;
  virginieSource: string;
  // Burley
  burleyQuantite: number;
  burleyCategorie: string;
  burleySource: string;
  // Orientale
  orientaleQuantite: number;
  orientaleCategorie: string;
  orientaleSource: string;
  
  // Section 1.2: Tabac en feuilles
  // Burley feuilles
  burleyFeuillesQuantite: number;
  burleyFeuillesSource: string;
  // Orientale feuilles
  orientaleFeuillesQuantite: number;
  orientaleFeuillesSource: string;
  // Brun (Arbi) feuilles
  brunFeuillesQuantite: number;
  brunFeuillesSource: string;
  // Tabac Noir feuilles
  tabacNoirFeuillesQuantite: number;
  tabacNoirFeuillesSource: string;
  
  // Section 1.3: Côtes
  // Virginie côtes
  virginieCotesQuantite: number;
  virginieCotesSource: string;
  // Burley côtes
  burleyCotesQuantite: number;
  burleyCotesSource: string;
  // Brun (Arbi) côtes
  brunCotesQuantite: number;
  brunCotesSource: string;
  
  // Section 1.4: Tabac reconstitué
  tabacReconstitueQuantite: number;
  
  // Section 2: Sauce introduite
  sauceQuantite: number;
  
  // Section 3: Tabac à la sortie du sécheur
  tabacSortieQuantite: number;
  
  // Section 4: Stock
  // Scaferlati VMG
  scaferlatiFMGProduite: number;
  scaferlatiFMGStockee: number;
  // Scaferlati VMI
  scaferlatiVMIProduite: number;
  scaferlatiVMIStockee: number;
  // VML
  vmlProduite: number;
  vmlStockee: number;
  // CIOR
  ciorProduite: number;
  ciorStockee: number;
  
  // Section 5: Scaferlati réintroduite
  scaferlatiReintroduite: number;
  // Côtes
  cotesProduite: number;
  cotesStockee: number;
}

export default function CreatePGPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PGFormData>();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const selectedSection = watch('selectedSection');

  const onSubmit = async (data: PGFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('PG Form Data:', data);
    
    // Redirect back to PG page
    router.push('/dashboard/pg');
  };

  const sourceOptions = [
    'Brésil', 'Argentine', 'Tanzanie', 'Saint Dominique', 'Indonésie', 'Malawi', 
    'Zambie', 'Zimbabwe', 'Colombie', 'Italie', 'Philippine', 'Chine', 'Angarie',
    'Bulgarie', 'Bangladesh', 'Ouganda', 'Thaïlande', 'Mozambique', 'Grèce', 'Macédoine'
  ];

  const tunisieSourceOptions = ['Nord', 'Sud', 'Cap Bon'];
  const categorieOptions = ['B', 'C', 'X', 'L'];

  const sectionOptions = [
    { value: '1', label: '1- Tabac à l\'entrée', color: 'text-pink-600' },
    { value: '2', label: '2- Sauce Introduite', color: 'text-green-600' },
    { value: '3', label: '3- Tabac à la sortie du sécheur', color: 'text-gray-600' },
    { value: '4', label: '4- Stock', color: 'text-orange-600' },
    { value: '5', label: '5- Scaferlati réintroduite', color: 'text-blue-600' }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Créer Nouvelle Entrée - PG
        </h1>
        <p className="text-gray-600">
          Formulaire de saisie pour Atelier PG
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Section Selection */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Select :
          </h2>
          <div className="max-w-md">
            <select
              {...register('selectedSection', { required: 'Veuillez sélectionner une section' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            >
              <option value="">Sélectionner une section...</option>
              {sectionOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.selectedSection && (
              <p className="text-red-500 text-sm mt-1">{errors.selectedSection.message}</p>
            )}
          </div>
        </div>

        {/* Conditional Form Sections */}
        {selectedSection === '1' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-pink-600 mb-4">
              1. Tabac à l'entrée
            </h2>
            
            {/* 1.1 Strips (Slicer) */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">1.1. Strips (Slicer)</h3>
              
              {/* Virginie */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Virginie :</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('virginieQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catégorie
                    </label>
                    <select
                      {...register('virginieCategorie')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {categorieOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('virginieSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {sourceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Burley */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Burley :</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('burleyQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catégorie
                    </label>
                    <select
                      {...register('burleyCategorie')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {categorieOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('burleySource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {sourceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Orientale */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Orientale :</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('orientaleQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catégorie
                    </label>
                    <select
                      {...register('orientaleCategorie')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {categorieOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('orientaleSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {sourceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.2 Tabac en feuilles */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">1.2. Tabac en feuilles</h3>
              
              {/* Burley feuilles */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Burley :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('burleyFeuillesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('burleyFeuillesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {tunisieSourceOptions.map(option => (
                        <option key={option} value={`Tunisie-${option}`}>Tunisie - {option}</option>
                      ))}
                      <option value="Philippine">Philippine</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Orientale feuilles */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Orientale :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('orientaleFeuillesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('orientaleFeuillesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {tunisieSourceOptions.map(option => (
                        <option key={option} value={`Tunisie-${option}`}>Tunisie - {option}</option>
                      ))}
                      <option value="Philippine">Philippine</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Brun (Arbi) feuilles */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Brun (Arbi) :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('brunFeuillesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('brunFeuillesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {tunisieSourceOptions.map(option => (
                        <option key={option} value={`Tunisie-${option}`}>Tunisie - {option}</option>
                      ))}
                      <option value="Philippine">Philippine</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Tabac Noir feuilles */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Tabac Noir :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('tabacNoirFeuillesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('tabacNoirFeuillesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {tunisieSourceOptions.map(option => (
                        <option key={option} value={`Tunisie-${option}`}>Tunisie - {option}</option>
                      ))}
                      <option value="Philippine">Philippine</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.3 Côtes */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">1.3. Côtes</h3>
              
              {/* Virginie côtes */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Virginie :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('virginieCotesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('virginieCotesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Brésil">Brésil</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Inde">Inde</option>
                      <option value="Tanzanie">Tanzanie</option>
                      <option value="Zambie">Zambie</option>
                      <option value="Battage">Battage</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Burley côtes */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Burley :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('burleyCotesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('burleyCotesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Brésil">Brésil</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Inde">Inde</option>
                      <option value="Tanzanie">Tanzanie</option>
                      <option value="Zambie">Zambie</option>
                      <option value="Battage">Battage</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Brun (Arbi) côtes */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">Brun (Arbi) :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('brunCotesQuantite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <select
                      {...register('brunCotesSource')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Brésil">Brésil</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Inde">Inde</option>
                      <option value="Tanzanie">Tanzanie</option>
                      <option value="Zambie">Zambie</option>
                      <option value="Battage">Battage</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.4 Tabac reconstitué */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">1.4. Tabac reconstitué</h3>
              <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantité en KG
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register('tabacReconstitueQuantite')}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Sauce introduite */}
        {selectedSection === '2' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-green-600 mb-4">
              2. Sauce introduite
            </h2>
            <div className="max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantité en KG
              </label>
              <input
                type="number"
                step="0.01"
                {...register('sauceQuantite')}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Section 3: Tabac à la sortie du sécheur */}
        {selectedSection === '3' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-600 mb-4">
              3. Tabac à la sortie du sécheur
            </h2>
            <div className="max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantité en KG
              </label>
              <input
                type="number"
                step="0.01"
                {...register('tabacSortieQuantite')}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Section 4: Stock */}
        {selectedSection === '4' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-orange-600 mb-4">
              4. Stock
            </h2>
            
            {/* Scaferlati */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">Scaferlati :</h3>
              
              {/* VMG */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">VMG :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité produite en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('scaferlatiFMGProduite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité stockée en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('scaferlatiFMGStockee')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* VMI */}
              <div className="mb-4 p-4 border rounded">
                <h4 className="font-medium mb-3">VMI :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité produite en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('scaferlatiVMIProduite')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité stockée en KG
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('scaferlatiVMIStockee')}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* VML */}
            <div className="mb-4 p-4 border rounded">
              <h4 className="font-medium mb-3">VML :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité produite en KG
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('vmlProduite')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité stockée en KG
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('vmlStockee')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* CIOR */}
            <div className="mb-4 p-4 border rounded">
              <h4 className="font-medium mb-3">CIOR :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité produite en KG
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('ciorProduite')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité stockée en KG
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('ciorStockee')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 5: Scaferlati réintroduite */}
        {selectedSection === '5' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              5. Scaferlati réintroduite
            </h2>
            
            {/* Scaferlati réintroduite */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">Scaferlati réintroduite</h3>
              <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantité en KG
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register('scaferlatiReintroduite')}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Côtes */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-800 mb-4">Côtes :</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité produite en KG
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('cotesProduite')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité stockée en KG
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('cotesStockee')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button - Only show when a section is selected */}
        {selectedSection && (
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/dashboard/pg')}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}