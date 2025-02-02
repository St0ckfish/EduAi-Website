/* eslint-disable @next/next/no-img-element */
import PricingTable from "~/components/PricingTable";

const Pricing = () => {
    return (
        <>
            <img src="/images/web.png" alt="#" className="absolute  top-10" />
            <div className="container mx-auto grid w-full text-center justify-center items-center text-white mt-10">
                <h3 className="text-3xl font-medium mb-2">Choose your plan</h3>
                <p className="text-xl">
                    Choose your plan and enjoy all the features you need for an exceptional educational experience for your children
                </p>
            </div>
            <PricingTable />
        </>
    );
}

export default Pricing;