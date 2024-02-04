import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white font-nunito"
          >
            <div
              className="w-screen h-screen fixed -z-10"
              style={{
                background: "linear-gradient(black,#652b86, #371d37)", // Adjust colors as needed
              }}
            />
            <Logo />
            <Navigation />
            <Outlet />
            <Footer />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
