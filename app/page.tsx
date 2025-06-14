// In file: app/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Users, BarChart3, Zap, Target, Award } from "lucide-react";
import VantaBirds from "@/components/VantaBirds"; // <-- IMPORT THE NEW COMPONENT

export default function HomePage() {
  return (
    <div className="page-container">
      {/* 1. Add the new Vanta Birds background */}
      <VantaBirds />

      {/* 2. The old bubble background has been removed. */}

      {/* Top Logo - Enhanced */}
      <div className="absolute top-8 left-8 z-20 fade-in">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400/40 to-purple-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/40 shadow-2xl">
            <Brain className="w-8 h-8 text-purple-100" />
          </div>
          <span className="text-2xl font-bold text-white/90 drop-shadow-lg">Personality Insights</span>
        </div>
      </div>

      {/* Main Content - Place on top of the background with z-index */}
      <main className="flex items-center justify-center h-full w-full px-8 relative z-10">
        {/* All of your existing content from here down remains the same */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="slide-left">
            <h1 className="text-6xl lg:text-8xl font-black text-white/90 mb-6 drop-shadow-2xl tracking-tight text-glow leading-tight">
              Welcome to
            </h1>
            <h2 className="text-6xl lg:text-8xl font-black hero-gradient-text mb-8 drop-shadow-2xl tracking-tight leading-tight">
              Personality
              <br />
              Insights
            </h2>

            <p className="text-xl text-white/80 max-w-lg mb-12 leading-relaxed drop-shadow-lg font-medium">
              Discover the fascinating dynamics between personality types. Our scientifically validated insights help you 
              understand yourself and others through advanced neural analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link href="/assessment">
                <Button className="btn-primary text-lg px-10 py-5 hover-glow transform hover:scale-105 transition-all duration-300">
                  <Brain className="w-6 h-6 mr-3" />
                  Take Assessment
                </Button>
              </Link>
              
              <Button className="btn-secondary text-lg px-10 py-5 hover-glow transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-6 h-6 mr-3" />
                Learn More
              </Button>
            </div>

            <div className="flex space-x-12">
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-purple-400/30 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-purple-400/40 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg animate-pulse"></div>
                </div>
                <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">Scientific</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-purple-400/30 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-purple-400/40 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">Accurate</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-purple-400/30 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-purple-400/40 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">Insightful</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="slide-right">
            <div className="figma-card w-full h-96 lg:h-[600px] overflow-hidden">
              {/* Neural Intelligence Card */}
              <div className="relative h-full space-image">
                {/* Brain Logo in top left */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                  {/* Central Brain Icon */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-2xl">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    {/* Floating dots around brain */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/60 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 -right-6 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/4 -left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-glow">Neural Intelligence</h3>
                  <p className="text-white/80 text-sm mb-6 max-w-xs">Advanced AI-powered personality mapping</p>

                  {/* Floating elements/bubbles */}
                  <div className="absolute top-1/4 right-1/4 floating-element">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/4 floating-element">
                    <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-full border border-white/25"></div>
                  </div>
                  <div className="absolute top-1/2 right-1/6 floating-element">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"></div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 floating-element">
                    <div className="w-6 h-6 bg-white/25 backdrop-blur-sm rounded-full border border-white/35"></div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/70 text-xs">Advanced Psychology Engine Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom floating info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <p className="text-white/50 text-sm font-medium backdrop-blur-sm bg-white/5 px-8 py-3 rounded-full border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 cursor-pointer">
            ✨ Takes only 2 minutes • 100% Free • Instant AI Results
          </p>
        </div>
      </main>
    </div>
  );
}
