"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { signIn } from "next-auth/react";
import { getCurrentUser } from "@/actions/getUser";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const SignUp = () => {
    return (
        <>
            {/* <div>
                {isLoading && <div>Loading...</div>} 
            </div> */}
            <div className="h-full flex items-center justify-center">
                <Card className="w-80 bg-stone-100/90 border-sky-900">
                    <CardHeader className="flex flex-col space-y-1 items-center">
                        <CardTitle className="text-zinc-900">
                            Sing up to Twitter
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-3">
                        <Button
                            className="rounded-lg bg-stone-900/90 text-zinc-100 hover:bg-sky-700"
                            onClick={() => signIn("google")}
                        >
                            <span className="mr-2 text-xl">
                                <FaGoogle />
                            </span>{" "}
                            Sign up with Google
                        </Button>
                        <Button className="rounded-lg bg-stone-900/90 text-zinc-100 hover:bg-sky-700">
                            <span className="mr-2 text-xl">
                                <FaGithub />
                            </span>{" "}
                            Sign up with GitHub
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-1">
                        <span className="text-zinc  -900 text-sm self-start">
                            Already have an account?
                        </span>
                        <Button className="w-full rounded-lg bg-stone-900/90 text-zinc-100 hover:bg-sky-700">
                            Sign In
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default SignUp;
