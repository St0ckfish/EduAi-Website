/* eslint-disable @next/next/no-img-element */
"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "~/components/ui/navigation-menu"

import Link from "next/link";
import { cn } from "~/lib/utils";
import { useNavAnimate } from "~/hooks/useNavAnimate";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu"

const NavBar = () => {
    const show = useNavAnimate();

    return (
    <header
        className={cn(
            "sticky top-0 z-50 transition-transform duration-200",
            { "translate-y-0": show },
            { "-translate-y-full": !show },
        )}
    >
        <div className="bg-[#1E364E] px-6 py-4">

        </div>
        <nav className="px-6 py-4 bg-[#091225]">
            <div className="flex justify-between items-center">
                <img src="/images/logo.png" alt="#" className="w-[150px]" />
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6">
                        <button className="text-gray-300 hover:text-white">Product</button>
                        <button className="text-gray-300 hover:text-white">Solution</button>
                        <button className="text-gray-300 hover:text-white">Resources</button>
                        <button className="text-gray-300 hover:text-white">Pricing</button>
                        <button className="text-gray-300 hover:text-white">Guide</button>
                    </div>
                    <button className="px-4 py-2 text-[#6D758F] bg-white rounded-md ">Login</button>
                    <button className="px-4 py-2 bg-[#1B486A] text-white rounded-md ">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;