import { ThemeProvider } from "@/app/ThemeProvider";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ToggleButton />
      <Navbar />
      <section className="container mx-auto">{children}</section>
    </ThemeProvider>
  );
};
