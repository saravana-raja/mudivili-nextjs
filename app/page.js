import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Zap, Shield } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <Solutions />
       <Features />

      
    </div>
  );
}
