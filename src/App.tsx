
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Events from "@/pages/Events";
import EventForm from "@/pages/EventForm";
import Clubs from "@/pages/Clubs";
import Timeline from "@/pages/Timeline";
import MyClubs from "@/pages/MyClubs";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Main App Routes */}
          <Route path="/" element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          } />
          <Route path="/events" element={
            <AppLayout>
              <Events />
            </AppLayout>
          } />
          <Route path="/events/new" element={
            <AppLayout>
              <EventForm />
            </AppLayout>
          } />
          <Route path="/clubs" element={
            <AppLayout>
              <Clubs />
            </AppLayout>
          } />
          <Route path="/timeline" element={
            <AppLayout>
              <Timeline />
            </AppLayout>
          } />
          <Route path="/my-clubs" element={
            <AppLayout>
              <MyClubs />
            </AppLayout>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
