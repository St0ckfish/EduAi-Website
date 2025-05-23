import { FaPlay } from "react-icons/fa6";

interface VideoData {
    id: string;
    videoUrl: string;
}

interface VideoProps {
    isBackground?: boolean;
    video?: VideoData;
}

const Video = ({ isBackground = false, video }: VideoProps) => {
    if (!video?.videoUrl) {
        return (
            <div className="flex items-center justify-center min-h-[500px]">
                <div className="relative w-full max-w-2xl">
                    {isBackground && <div className="absolute inset-0 bg-[#1d364e] rounded-2xl transform -translate-x-8 -translate-y-8"></div>}
                    <div className="relative bg-[#d9d9d9] rounded-2xl aspect-video flex items-center justify-center">
                        <button
                            className="p-4 rounded-full bg-[#4a6488] text-white hover:bg-blue-800 transition-colors"
                            aria-label="Play video"
                        >
                            <FaPlay size={28} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-[500px]">
            <div className="relative w-full max-w-2xl">
                {isBackground && <div className="absolute inset-0 bg-[#1d364e] rounded-2xl transform -translate-x-8 -translate-y-8"></div>}
                <div className="relative bg-[#d9d9d9] rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        src={video.videoUrl}
                        poster="/images/video-poster.jpg"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Video;