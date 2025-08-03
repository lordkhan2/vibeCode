"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

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
        <div className="h-screen w-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-xl w-full text-center space-y-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Give a Prompt to Generate Your Website
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Describe what you want and let us build it for you.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="e.g. Portfolio for a designer"
                        className="flex-1"
                    />
                    <Button
                        disabled={createProject.isPending || !value.trim()}
                        onClick={() => createProject.mutate({ value })}
                    >
                        {createProject.isPending ? "Generating..." : "Generate"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Page;
