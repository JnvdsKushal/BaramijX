import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Return to BaramijX home and explore our IT consulting, digital marketing, and web development services."
            />

            <div className="max-w-2xl mx-auto text-center">
                {/* Animated 404 number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="text-[120px] sm:text-[180px] font-[900] leading-none bg-gradient-to-br from-primary via-primary/70 to-accent bg-clip-text text-transparent select-none">
                        404
                    </span>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-[28px] sm:text-[36px] font-[800] text-foreground mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-muted-foreground text-[16px] leading-relaxed mb-10 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's
                        get you back on track.
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        asChild
                        className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-8 py-6 rounded-xl shadow-lg gap-2"
                    >
                        <Link to="/">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="px-8 py-6 rounded-xl gap-2"
                    >
                        <Link to="/contact">
                            <ArrowLeft className="w-5 h-5" />
                            Contact Support
                        </Link>
                    </Button>
                </motion.div>

                {/* Quick links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-14"
                >
                    <p className="text-muted-foreground text-[14px] mb-4 flex items-center justify-center gap-2">
                        <Search className="w-4 h-4" />
                        Popular pages
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { label: "Our Services", href: "/services" },
                            { label: "About Us", href: "/about" },
                            { label: "Blog", href: "/blog" },
                            { label: "Get a Quote", href: "/get-quote" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="px-4 py-2 bg-muted rounded-full text-[14px] font-[500] text-foreground hover:bg-primary hover:text-white transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
