"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
    Sparkles,
    Zap,
    Globe,
    Code,
    ArrowRight,
    Star,
    Rocket,
    Palette,
} from "lucide-react";

const Page = () => {
    const router = useRouter();
    const [value, setValue] = useState("");

    const trpc = useTRPC();

    const createProject = useMutation(
        trpc.projects.create.mutationOptions({
            onError: (error) => {
                toast.error(error.message);
            },
            onSuccess: (data) => {
                router.push(`/projects/${data.id}`);
            },
        }),
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-slate-500/5 to-amber-500/5" />
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-slate-400/10 to-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative px-4 py-20 mx-auto max-w-7xl">
                    <div className="text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-300/30 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-teal-500" />
                            <span className="text-sm font-medium">
                                AI-Powered Website Generation
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-700 dark:from-slate-100 dark:via-gray-200 dark:to-zinc-200 bg-clip-text text-transparent">
                                    Build Your Website
                                </span>
                                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500 bg-clip-text text-transparent">
                                    With AI Magic
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Describe your vision in plain English and watch
                                as we transform it into a stunning,
                                fully-functional website in minutes.
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="max-w-2xl mx-auto space-y-6">
                            <div className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                                <Input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="e.g., A modern portfolio for a creative designer with dark theme..."
                                    className="flex-1 border-0 bg-transparent text-lg placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                                <Button
                                    size="lg"
                                    disabled={
                                        createProject.isPending || !value.trim()
                                    }
                                    onClick={() =>
                                        createProject.mutate({ value })
                                    }
                                    className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                                >
                                    {createProject.isPending ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Generating...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-5 h-5" />
                                            Generate Website
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </Button>
                            </div>

                            <div className="flex items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                                <span className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-amber-500" />
                                    No coding required
                                </span>
                                <span className="flex items-center gap-2">
                                    <Rocket className="w-4 h-4 text-emerald-500" />
                                    Instant results
                                </span>
                                <span className="flex items-center gap-2">
                                    <Palette className="w-4 h-4 text-teal-500" />
                                    Professional quality
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="px-4 py-20 mx-auto max-w-7xl">
                <div className="text-center space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-gray-700 dark:from-slate-100 dark:to-gray-200 bg-clip-text text-transparent">
                            Why Choose AI Website Generation?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Experience the future of web development with
                            cutting-edge AI technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/30 hover:border-emerald-400/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                                Lightning Fast
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Generate complete websites in minutes, not days.
                                From concept to deployment in record time.
                            </p>
                        </div>

                        <div className="group p-8 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-2xl border border-slate-200/50 dark:border-slate-700/30 hover:border-slate-400/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                                Professional Quality
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Built with modern web standards, responsive
                                design, and optimized performance.
                            </p>
                        </div>

                        <div className="group p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200/50 dark:border-amber-700/30 hover:border-amber-400/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                                Customizable
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Every website is unique. Customize colors,
                                layouts, and content to match your brand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="px-4 py-20 mx-auto max-w-7xl">
                <div className="text-center space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-gray-700 dark:from-slate-100 dark:to-gray-200 bg-clip-text text-transparent">
                            How It Works
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Three simple steps to your perfect website
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white shadow-lg">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                                Describe Your Vision
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Tell us what you want in plain English. Be as
                                detailed or simple as you like.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white shadow-lg">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                                AI Magic Happens
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Our advanced AI analyzes your requirements and
                                creates a custom website.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white shadow-lg">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                                Launch & Customize
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Your website is ready! Make final adjustments
                                and go live instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 py-20 mx-auto max-w-4xl">
                <div className="text-center space-y-8 p-12 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl border border-emerald-300/30 dark:border-emerald-600/30 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-gray-700 dark:from-slate-100 dark:to-gray-200 bg-clip-text text-transparent">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Join thousands of creators who are building their online
                        presence with AI
                    </p>
                    <Button
                        size="lg"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                    >
                        Start Building Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Page;
