import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, Shield, X } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

// Types for cookie consent preferences
interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Default preferences: Essential is always true
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if consent has already been given
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      // Small delay to show banner after page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // If consent exists, we can load the preferences
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
        // Here we would initialize analytics based on saved preferences
        handleScripts(parsed);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleScripts = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      console.log("Analytics scripts initialized");
      // window.gtag(...) or similar
    }
    if (prefs.marketing) {
      console.log("Marketing scripts initialized");
      // Facebook Pixel, etc.
    }
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setPreferences(prefs);
    handleScripts(prefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allEnabled = { essential: true, analytics: true, marketing: true };
    saveConsent(allEnabled);
  };

  const handleRejectAll = () => {
    const onlyEssential = { essential: true, analytics: false, marketing: false };
    saveConsent(onlyEssential);
  };

  const handleSaveSettings = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Cannot toggle essential
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-7xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 md:p-8 md:flex md:items-center md:justify-between gap-6">
              
              {/* Content */}
              <div className="flex-1 mb-6 md:mb-0">
                <div className="flex items-center gap-2 mb-3">
                  <Cookie className="w-6 h-6 text-[#1E3A8A]" />
                  <h3 className="text-xl font-bold text-[#1E3A8A]">We use cookies</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
                  By clicking &apos;Accept all&apos;, you consent to our use of cookies. 
                  Read our <Link to="/privacy-policy" className="text-[#2563EB] hover:underline font-medium">Privacy Policy</Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <Button 
                  onClick={handleAcceptAll}
                  className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Accept all
                </Button>
                <Button 
                  onClick={handleRejectAll}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Reject all
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="ghost" 
                  className="text-gray-600 hover:text-[#1E3A8A] hover:bg-blue-50"
                >
                  Cookie settings
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[500px] bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1E3A8A] flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Manage your cookie preferences. Essential cookies are always required for the website to function properly.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 space-y-6">
            {/* Essential */}
            <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                <p className="text-sm text-gray-500">
                  Strictly necessary for the website to function. Cannot be disabled.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#2563EB]/30 transition-colors">
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                <p className="text-sm text-gray-500">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={() => togglePreference("analytics")} 
                className="data-[state=checked]:bg-[#2563EB]"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#2563EB]/30 transition-colors">
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                <p className="text-sm text-gray-500">
                  Used to deliver relevant advertisements and track ad performance.
                </p>
              </div>
              <Switch 
                checked={preferences.marketing} 
                onCheckedChange={() => togglePreference("marketing")} 
                className="data-[state=checked]:bg-[#2563EB]"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
             <Button 
              variant="outline" 
              onClick={() => setShowSettings(false)}
              className="mt-2 sm:mt-0"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSaveSettings}
              className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white w-full sm:w-auto"
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
