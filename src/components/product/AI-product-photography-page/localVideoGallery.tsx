const videos = [
  { src: "/videos/reel1.mp4", title: "Reel 1" },
  { src: "/videos/reel2.mp4", title: "Reel 2" },
  { src: "/videos/reel3.mp4", title: "Reel 3" },
  // Add more as needed
];

export default function LocalVideoGallery() {
  return (
    <div className="mt-20 w-full">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 multi-line-gradient font-poppins">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ali">
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full rounded-2xl flex  justify-center "
            >
              <video
                // controls
                autoPlay
                loop
                muted
                className="w-fit h-auto bg-black max-w-[337px]   max-h-[600px] rounded-2xl"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
