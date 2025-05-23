/* eslint-disable @next/next/no-img-element */
"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"

import Link from "next/link"
import { cn } from "~/lib/utils"
import { useNavAnimate } from "~/hooks/useNavAnimate"
import * as React from "react"
import { Mail, Phone, Menu, Globe } from "lucide-react"
import useLanguageStore from "~/lib/store"

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const NavBar = () => {
    const show = useNavAnimate();
    const { language, setLanguage } = useLanguageStore();
    const [isOpenL, setIsOpenL] = React.useState(false)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ar', label: 'العربية' },
        { code: 'fr', label: 'Français' },
    ]

    React.useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenL(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    // Translated product items with dynamic translations
    const productItems = [
        {
            title: translate("Analytics", "Analytique", "التحليلات"),
            href: "/product/analytics",
            description: translate(
                "Get detailed insights into your business performance.",
                "Obtenez des aperçus détaillés sur la performance de votre entreprise.",
                "احصل على رؤى مفصلة حول أداء عملك."
            ),
        },
        {
            title: translate("Automation", "Automatisation", "الأتمتة"),
            href: "/product/automation",
            description: translate(
                "Automate your workflow and increase productivity.",
                "Automatisez votre flux de travail et augmentez la productivité.",
                "أتمتة سير العمل الخاص بك وزيادة الإنتاجية."
            ),
        },
        {
            title: translate("Integration", "Intégration", "التكامل"),
            href: "/product/integration",
            description: translate(
                "Connect with your favorite tools and services.",
                "Connectez-vous avec vos outils et services préférés.",
                "الاتصال بأدواتك وخدماتك المفضلة."
            ),
        },
    ]

    // Translated solution items with dynamic translations
    const solutionItems = [
        {
            title: translate("For Enterprise", "Pour les Entreprises", "للمؤسسات"),
            href: "/solutions/enterprise",
            description: translate(
                "Large-scale solutions for enterprise businesses.",
                "Solutions à grande échelle pour les entreprises.",
                "حلول واسعة النطاق للشركات الكبيرة."
            ),
        },
        {
            title: translate("For Startups", "Pour les Startups", "للشركات الناشئة"),
            href: "/solutions/startups",
            description: translate(
                "Tailored solutions for growing businesses.",
                "Solutions adaptées aux entreprises en croissance.",
                "حلول مخصصة للشركات الناشئة."
            ),
        },
        {
            title: translate("For Teams", "Pour les Équipes", "للفرق"),
            href: "/solutions/teams",
            description: translate(
                "Collaborative tools for efficient teamwork.",
                "Outils collaboratifs pour un travail d'équipe efficace.",
                "أدوات تعاونية لعمل الفريق بكفاءة."
            ),
        },
    ]

    const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
        <Link
            href={href}
            className="block py-3 text-gray-300 hover:text-white border-b border-gray-700"
        >
            {children}
        </Link>
    )

    // Handle RTL layout for Arabic
    const rtlClass = language === 'ar' ? 'rtl' : '';
    
    return (
        <header
            className={cn(
                "sticky top-0 z-50 transition-transform duration-200",
                { "translate-y-0": show },
                { "-translate-y-full": !show },
                rtlClass
            )}
        >
            <div className="bg-[#1E364E] px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="mailto:contact@Eduai.com" className="flex items-center text-gray-300 hover:text-white">
                            <Mail className="w-4 h-4 mr-2" />
                            contact@Eduai.com
                        </a>
                        <a href="tel:(414) 850 - 0417" className="flex items-center text-gray-300 hover:text-white">
                            <Phone className="w-4 h-4 mr-2" />
                            (414) 850 - 0417
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="px-6 py-4 bg-[#091225]">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img src="/images/logo.png" alt="#" className="w-[150px]" />
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="text-gray-300 hover:text-white">
                                            {translate("Product", "Produit", "المنتج")}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-[#051b2c] border border-[#1B486A] text-white">
                                                {productItems.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.href}
                                                    >
                                                        {item.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="text-gray-300 hover:text-white">
                                            {translate("Solution", "Solution", "الحلول")}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-[#051b2c] border border-[#1B486A] text-white">
                                                {solutionItems.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.href}
                                                    >
                                                        {item.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <Link href="/resources" className="text-gray-300 hover:text-white px-3">
                                {translate("Resources", "Ressources", "الموارد")}
                            </Link>
                            <Link href="/pricing" className="text-gray-300 hover:text-white px-3">
                                {translate("Pricing", "Tarification", "التسعير")}
                            </Link>
                            <Link href="/guide" className="text-gray-300 hover:text-white px-3">
                                {translate("Guide", "Guide", "الدليل")}
                            </Link>
                            <Link href="/sales" className="text-gray-300 hover:text-white px-3">
                                {translate("Contact Sales", "Contacter les Ventes", "اتصل بالمبيعات")}
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button className="text-gray-300 hover:text-white p-2">
                                        <Menu className="w-6 h-6" />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] bg-[#091225] border-l border-[#1B486A] p-6">
                                    <SheetHeader>
                                        <SheetTitle className="text-white">
                                            {translate("Menu", "Menu", "القائمة")}
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="mt-6 flex flex-col">
                                        {/* Product Section */}
                                        <div className="py-3 border-b border-gray-700">
                                            <h3 className="text-white font-medium mb-2">
                                                {translate("Product", "Produit", "المنتج")}
                                            </h3>
                                            <div className="ml-4 space-y-2">
                                                <Link href="/product/analytics" className="block text-gray-300 hover:text-white py-1">
                                                    {translate("Analytics", "Analytique", "التحليلات")}
                                                </Link>
                                                <Link href="/product/automation" className="block text-gray-300 hover:text-white py-1">
                                                    {translate("Automation", "Automatisation", "الأتمتة")}
                                                </Link>
                                                <Link href="/product/integration" className="block text-gray-300 hover:text-white py-1">
                                                    {translate("Integration", "Intégration", "التكامل")}
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Solutions Section */}
                                        <div className="py-3 border-b border-gray-700">
                                            <h3 className="text-white font-medium mb-2">
                                                {translate("Solutions", "Solutions", "الحلول")}
                                            </h3>
                                            <div className="ml-4 space-y-2">
                                                <Link href="/solutions/enterprise" className="block text-gray-300 hover:text-white py-1">
                                                    {translate("For Enterprise", "Pour les Entreprises", "للمؤسسات")}
                                                </Link>
                                                <Link href="/solutions/startups" className="block text-gray-300 hover:text-white py-1">
                                                    {translate("For Startups", "Pour les Startups", "للشركات الناشئة")}
                                                </Link>
                                                <Link href="/solutions/teams" className="block text-gray-300 hover:text-white py-1">
                                                    {translate("For Teams", "Pour les Équipes", "للفرق")}
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Main Navigation Links */}
                                        <div className="py-3 space-y-4">
                                            <Link href="/resources" className="block text-gray-300 hover:text-white">
                                                {translate("Resources", "Ressources", "الموارد")}
                                            </Link>
                                            <Link href="/pricing" className="block text-gray-300 hover:text-white">
                                                {translate("Pricing", "Tarification", "التسعير")}
                                            </Link>
                                            <Link href="/guide" className="block text-gray-300 hover:text-white">
                                                {translate("Guide", "Guide", "الدليل")}
                                            </Link>
                                            <Link href="/sales" className="block text-gray-300 hover:text-white">
                                                {translate("Contact Sales", "Contacter les Ventes", "اتصل بالمبيعات")}
                                            </Link>
                                        </div>

                                        {/* Auth Buttons */}
                                        <div className="mt-6 space-y-3">
                                            <Link
                                                href="/login"
                                                className="w-full block text-center px-4 py-2 text-[#6D758F] bg-white rounded-md"
                                            >
                                                {translate("Login", "Connexion", "تسجيل الدخول")}
                                            </Link>
                                            <Link
                                                href="/signup"
                                                className="w-full block text-center px-4 py-2 bg-[#1B486A] text-white rounded-md"
                                            >
                                                {translate("Sign up", "S'inscrire", "التسجيل")}
                                            </Link>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="mt-6 pt-6 border-t border-gray-700">
                                            <a href="mailto:contact@Eduai.com" className="block text-gray-300 hover:text-white py-2">
                                                contact@Eduai.com
                                            </a>
                                            <a href="tel:(414) 850 - 0417" className="block text-gray-300 hover:text-white py-2">
                                                (414) 850 - 0417
                                            </a>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="flex items-center text-white hover:text-red-500 gap-2 px-4 py-2 border hover:border-red-500 rounded-md hover:bg-bgSecondary duration-500 ease-in-out"
                                onClick={() => setIsOpenL(!isOpenL)}
                            >
                                <Globe className="h-4 w-4" />
                                <span>{languages.find(lang => lang.code === language)?.label}</span>
                            </button>

                            {isOpenL && (
                                <div className={`absolute ${language === "ar" ? "right-0" : "right-0"} mt-2 w-48 bg-[#091225] border rounded-md shadow-lg`}>
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code)
                                                setIsOpenL(false)
                                            }}
                                            className={`w-full text-left px-4 py-2 text-white ${language === lang.code ? 'bg-[#1B486A]' : ''}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link 
                            href="/login" 
                            className="px-4 py-2 text-[#6D758F] bg-white rounded-md hidden lg:flex"
                        >
                            {translate("Login", "Connexion", "تسجيل الدخول")}
                        </Link>
                        <Link 
                            href="/signup" 
                            className="px-4 py-2 bg-[#1B486A] text-white rounded-md hidden lg:flex"
                        >
                            {translate("Sign up", "S'inscrire", "التسجيل")}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;