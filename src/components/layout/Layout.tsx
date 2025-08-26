import React from "react";
import { Outlet } from "react-router-dom";
// Correction: Utilisation des alias de chemin corrects pour correspondre à la structure de votre projet.
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer"; // Optionnel : si vous avez un Footer

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
