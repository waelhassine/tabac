"use client"

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  id: string;
  label: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "zone-a",
    label: "Zone A",
    subItems: [
      { id: "atelier-vmi-1", label: "Atelier VMI 1" },
      { id: "atelier-vmi-2", label: "Atelier VMI 2" },
      { id: "atelier-farhar-hached", label: "Atelier Farhar Hached" }
    ]
  },
  {
    id: "zone-b",
    label: "Zone B",
    subItems: [
      { id: "pg", label: "PG" },
      { id: "atelier-vml-1", label: "Atelier VML 1" },
      { id: "atelier-vml-2", label: "Atelier VML 2" }
    ]
  }
];

export default function DashboardPage() {
  const [currentDate] = useState(new Date().toLocaleDateString('fr-FR'));
  const [currentTime] = useState(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Tableau de Bord - Ateliers de Fabrication
        </h1>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Date : {currentDate}</span>
          <span>Heure : {currentTime}</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Ateliers</p>
              <p className="text-2xl font-bold text-gray-900">6</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Production Totale</p>
              <p className="text-2xl font-bold text-green-600">15,420 paquets</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Stock Scaferlati</p>
              <p className="text-2xl font-bold text-purple-600">2,847 kg</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ateliers Actifs</p>
              <p className="text-2xl font-bold text-blue-600">5/6</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Zone A - Usine A */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="bg-black text-white p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-center">Usine A</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left border">Catégorie</th>
                    <th className="p-2 text-left border">Données à renseigner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Consommation scaferlati</td>
                    <td className="p-2 border">1,245 kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border font-medium">Stock en cours de cigarettes</td>
                    <td className="p-2 border">45,230 cigarettes</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Cigarettes envoyées</td>
                    <td className="p-2 border">12,500 / Atelier VML 1</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border font-medium">Cigarettes reçues</td>
                    <td className="p-2 border">8,750 / Atelier VMI 2</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Poids de cigarette</td>
                    <td className="p-2 border">0.85 grammes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border font-medium">Production en paquets</td>
                    <td className="p-2 border">2,261 paquets produits</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Suivi de récupération</td>
                    <td className="p-2 border"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border pl-6">→ Déchireuse</td>
                    <td className="p-2 border">VMI 1</td>
                  </tr>
                  <tr>
                    <td className="p-2 border pl-6"></td>
                    <td className="p-2 border">Type de déchets : Cigarettes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border pl-6"></td>
                    <td className="p-2 border">Quantité traitée : 125 kg</td>
                  </tr>
                  <tr>
                    <td className="p-2 border pl-6">→ Uni Master</td>
                    <td className="p-2 border">Quantité réintroduite : 98 kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border pl-6"></td>
                    <td className="p-2 border">Quantité de poussière : 15 kg</td>
                  </tr>
                  <tr>
                    <td className="p-2 border pl-6">→ Dépoussiérage</td>
                    <td className="p-2 border">Quantité de poussière : 22 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Zone B - Usine B */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="bg-black text-white p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-center">Usine B</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left border">Catégorie</th>
                    <th className="p-2 text-left border">Données à renseigner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Consommation scaferlati</td>
                    <td className="p-2 border">1,602 kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border font-medium">Stock en cours de cigarettes</td>
                    <td className="p-2 border">3,250 paquets</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Cigarettes envoyées</td>
                    <td className="p-2 border">18,400 / Atelier VML 2</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border font-medium">Cigarettes reçues</td>
                    <td className="p-2 border">15,200 / PG</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Poids de cigarette</td>
                    <td className="p-2 border">0.92 grammes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border font-medium">Production en paquets</td>
                    <td className="p-2 border">920 paquets produits</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Suivi de récupération</td>
                    <td className="p-2 border"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border pl-6">→ Déchireuse</td>
                    <td className="p-2 border">Lieu B</td>
                  </tr>
                  <tr>
                    <td className="p-2 border pl-6"></td>
                    <td className="p-2 border">Type de déchets : Boudins</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border pl-6"></td>
                    <td className="p-2 border">Quantité traitée : 87 kg</td>
                  </tr>
                  <tr>
                    <td className="p-2 border pl-6"></td>
                    <td className="p-2 border">Quantité réintroduite : 72 kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border pl-6">→ Dépoussiérage</td>
                    <td className="p-2 border">Quantité de poussière : 18 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* PG Section */}
      <div className="bg-white rounded-lg shadow-sm border mb-8">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Tableau de bord – PG (Préparations Générales – Usine B)</h2>
          <div className="flex gap-4 text-sm mt-2">
            <span>Date : {currentDate}</span>
            <span>Heure : {currentTime}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tobacco Input Table */}
            <div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-2 border border-white text-left">Forme de tabac</th>
                      <th className="p-2 border border-white text-left">Variété</th>
                      <th className="p-2 border border-white text-left">Catégorie</th>
                      <th className="p-2 border border-white text-left">Source</th>
                      <th className="p-2 border border-white text-left">Quantité (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border font-medium" rowSpan={3}>Tabac à l'entrée</td>
                      <td className="p-2 border">Strips</td>
                      <td className="p-2 border">Virginie</td>
                      <td className="p-2 border">B</td>
                      <td className="p-2 border">450</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Burley</td>
                      <td className="p-2 border">C</td>
                      <td className="p-2 border">320</td>
                    </tr>
                    <tr>
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Orient</td>
                      <td className="p-2 border">X</td>
                      <td className="p-2 border">180</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border font-medium" rowSpan={3}>Tabac en feuille</td>
                      <td className="p-2 border">Burley</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Tunisie Nord</td>
                      <td className="p-2 border">275</td>
                    </tr>
                    <tr>
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Orient</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Tunisie Sud</td>
                      <td className="p-2 border">195</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Arbi</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Cap Bon</td>
                      <td className="p-2 border">340</td>
                    </tr>
                    <tr>
                      <td className="p-2 border font-medium" rowSpan={5}>Côtes</td>
                      <td className="p-2 border">Noir</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Philippines</td>
                      <td className="p-2 border">125</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Virginie</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Brésil</td>
                      <td className="p-2 border">280</td>
                    </tr>
                    <tr>
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Burley</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Zimbabwe</td>
                      <td className="p-2 border">165</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border"></td>
                      <td className="p-2 border">Arbi</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">Inde</td>
                      <td className="p-2 border">95</td>
                    </tr>
                    <tr>
                      <td className="p-2 border font-medium">Tabac reconstitué</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">75</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border font-medium">Sauce introduite</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">45</td>
                    </tr>
                    <tr>
                      <td className="p-2 border font-medium">Tabac à la sortie du sécheur</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">—</td>
                      <td className="p-2 border">2,150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stock Table */}
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-t">
                <h3 className="font-semibold text-center">Stock</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-2 border border-white text-left">Type de stock</th>
                      <th className="p-2 border border-white text-left">Type</th>
                      <th className="p-2 border border-white text-left">Quantité en Kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border font-medium">Stock journalier de scaferlati</td>
                      <td className="p-2 border">VMG</td>
                      <td className="p-2 border">1,245</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border font-medium">Stock existant de scaferlati</td>
                      <td className="p-2 border">VMI</td>
                      <td className="p-2 border">3,680</td>
                    </tr>
                    <tr>
                      <td className="p-2 border font-medium">Stock journalier de côtes</td>
                      <td className="p-2 border">VML</td>
                      <td className="p-2 border">425</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border font-medium">Stock existant de côtes</td>
                      <td className="p-2 border">CIOR</td>
                      <td className="p-2 border">890</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation des Ateliers</h2>
        <p className="text-gray-600 mb-4">
          Utilisez le menu de navigation pour accéder aux différents ateliers et saisir les données de production.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2"> Usine A</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Atelier VMI 1 - Production principale</li>
              <li>• Atelier VMI 2 - Production secondaire</li>
              <li>• Atelier Farhar Hached - Traitement spécialisé</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Usine B</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• PG - Préparations Générales</li>
              <li>• Atelier VML 1 - Ligne de production 1</li>
              <li>• Atelier VML 2 - Ligne de production 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}