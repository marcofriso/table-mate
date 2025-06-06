const Images = ({ images }: { images: string[] }) => (
  <div>
    <h1 className="font-bold text-xl sm:text-3xl mt-10 mb-7 border-b pb-5">
      {images.length} photo{images.length > 1 ? "s" : ""}
    </h1>
    <div className="flex flex-wrap">
      {images.map((image, i) => (
        <img
          key={`image-${i}`}
          className="w-56 h-44 mr-1 mb-1"
          src={image}
          alt=""
        />
      ))}
    </div>
  </div>
);

export default Images;
