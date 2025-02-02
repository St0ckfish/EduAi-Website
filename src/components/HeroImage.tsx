/* eslint-disable @next/next/no-img-element */
const HeroImage = ({ isBackground = false, background }: { isBackground?: boolean, background: string }) => {
    return (
        <div className="flex items-center justify-center h-[500px]">
            <div className="relative w-full max-w-2xl">
                {isBackground && <div className="absolute inset-0 bg-[#1d364e] w-[400px] h-[500px] rounded-2xl transform translate-x-8 translate-y-8"></div>}
                <div className="relative bg-[#d9d9d9] rounded-2xl w-[400px] h-[500px] aspect-video flex items-center justify-center border border-[#22438a] overflow-hidden">
                    <img 
                        src={background}
                        alt="Background"
                        className="absolute inset-0 w-[400px] h-[500px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroImage;