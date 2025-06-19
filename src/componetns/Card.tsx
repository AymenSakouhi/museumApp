import * as React from "react";

type CardProps = {
  painting: {
    url: string;
    title: string;
    description: string;
  };
};

const Card = ({ painting }: CardProps) => {
  const imgRef = React.useRef<HTMLImageElement>(null);

  const onImageHover = (e: React.MouseEvent<HTMLImageElement>) => {
    if (imgRef.current) {
      const boundingRect = imgRef.current?.getBoundingClientRect();
      const xPosition = e.clientX - boundingRect?.left;
      const yPosition = e.clientY - boundingRect?.top;

      const xPercent = (xPosition / boundingRect?.width) * 100;
      const yPercent = (yPosition / boundingRect?.height) * 100;

      imgRef.current.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      imgRef.current.style.transform = "scale(1.2)";
    }
  };

  const onImageLeave = () => {
    const img = imgRef.current;
    if (img) {
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center";
    }
  };

  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="border-2 rounded-md overflow-hidden">
        <img
          data-testid="image-card"
          ref={imgRef}
          src={painting.url}
          alt={painting.title}
          onMouseMove={onImageHover}
          onMouseLeave={onImageLeave}
          className="w-full h-full object-cover hover:scale-120 transition-transform duration-300"
        />
      </div>
      <div className="border-2 rounded-md overflow-hidden p-4 text-2xl flex flex-col justify-center items-center">
        <span className="mb-4 text-4xl" data-testid="painting-title">
          {painting.title}
        </span>
        <p className="text-justify" data-testid="painting-description">
          {painting.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
