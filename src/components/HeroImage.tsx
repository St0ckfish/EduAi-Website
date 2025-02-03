/* eslint-disable @next/next/no-img-element */
const HeroImage = ({ isBackground = false, background }: { isBackground?: boolean; background: string }) => {
    return (
        <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] p-4">
            <div className="relative w-full max-w-[280px] sm:max-w-xl md:max-w-2xl">
                {isBackground && (
                    <div 
                        className="absolute inset-0 bg-[#1d364e] 
                                 w-[280px] sm:w-[340px] md:w-[400px] 
                                 h-[300px] sm:h-[400px] md:h-[500px] 
                                 rounded-xl sm:rounded-2xl 
                                 transform translate-x-4 sm:translate-x-6 md:translate-x-8 
                                 translate-y-4 sm:translate-y-6 md:translate-y-8"
                    />
                )}
                <div 
                    className="relative bg-[#d9d9d9] 
                             rounded-xl sm:rounded-2xl 
                             w-[280px] sm:w-[340px] md:w-[400px] 
                             h-[300px] sm:h-[400px] md:h-[500px] 
                             aspect-[4/5] sm:aspect-video 
                             flex items-center justify-center 
                             border border-[#22438a] overflow-hidden"
                >
                    <img 
                        src={background}
                        alt="Background"
                        className="absolute inset-0 
                                 w-full h-full 
                                 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroImage;