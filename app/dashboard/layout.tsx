"use client"

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  
  {
    id: "zone-a",
    label: "Usine A",
    path: "/dashboard",
    subItems: [
      { id: "atelier-vmi-1", label: "Atelier VMI 1", path: "/dashboard/atelier-vmi-1" },
      { id: "atelier-vmi-2", label: "Atelier VMI 2", path: "/dashboard/atelier-vmi-2" },
      { id: "atelier-farhar-hached", label: "Atelier Farhar Hached", path: "/dashboard/atelier-farhar-hached" }
    ]
  },
  {
    id: "zone-b",
    label: "Usine B",
    path: "/dashboard",
    subItems: [
      { id: "pg", label: "PG", path: "/dashboard/pg" },
      { id: "atelier-vml-1", label: "Atelier VML 1", path: "/dashboard/atelier-vml-1" },
      { id: "atelier-vml-2", label: "Atelier VML 2", path: "/dashboard/atelier-vml-2" }
    ]
  }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["zone-a", "zone-b"]);
  const pathname = usePathname();
  const router = useRouter();

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleLogout = () => {
    router.push("/login");
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/tunisien goverment.png"
                alt="Gouvernement Tunisien"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/minister des finanaces.png"
                alt="Ministère des Finances"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/rnta.png"
                alt="RNTA"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <Separator orientation="vertical" className="h-8" />
            <h1 className="text-xl font-semibold text-gray-900">
              Systeme intégré de gestion des déchets (SIGD-RNTA)
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Utilisateur Admin</p>
              <p className="text-xs text-gray-500">Administrateur Système</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleLogout}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r min-h-[calc(100vh-73px)]">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>
            
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(item.id) ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {expandedItems.includes(item.id) && item.subItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleNavigation(subItem.path)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            pathname === subItem.path
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}