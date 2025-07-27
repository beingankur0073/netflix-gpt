const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
        <p className="hideen md:inline-block text-lg w-1/4 py-6">{overview}</p>
        <div className="my-4 md:m-0">
            <button className=" bg-white text-black md:py-4 py-1 px-3 text-xl rounded-lg hover:bg-opacity-80">
              ▶ Play
            </button>
            <button className="bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 mx-2">
              More Info
            </button>
        </div>
    </div>
  );
}

export default VideoTitle;