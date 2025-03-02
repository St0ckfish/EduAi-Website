"use client"
/* eslint-disable @next/next/no-img-element */
import PricingTable from "~/components/PricingTable";
import useLanguageStore from "~/lib/store";

const Pricing = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    return (
        <>
            <img src="/images/web.png" alt="#" className="absolute top-10" />
            <div className="container mx-auto grid w-full text-center justify-center items-center text-white mt-10">
                <h3 className="text-3xl font-medium mb-2">
                    {translate(
                        "Choose your plan",
                        "Choisissez votre plan",
                        "اختر خطتك"
                    )}
                </h3>
                <p className="text-xl">
                    {translate(
                        "Choose your plan and enjoy all the features you need for an exceptional educational experience for your children",
                        "Choisissez votre plan et profitez de toutes les fonctionnalités dont vous avez besoin pour une expérience éducative exceptionnelle pour vos enfants",
                        "اختر خطتك واستمتع بجميع الميزات التي تحتاجها لتجربة تعليمية استثنائية لأطفالك"
                    )}
                </p>
            </div>
            <PricingTable />
        </>
    );
}

export default Pricing;