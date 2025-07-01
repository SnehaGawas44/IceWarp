'use client';
import { DialogText, DialogWindow } from "@/components/dialog";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner} from "@/components/ui/sooner";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/not-found";

export default function Home() {
  return (
    <>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path = "/" element = { <NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </>
    );
}
