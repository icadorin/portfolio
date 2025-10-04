import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className = '',
  onClick,
}) => {
  return (
    <div className={`image-wrapper ${className}`} onClick={onClick}>
      <img
        src={src}
        alt={alt}
        className="image-content"
        onError={(e) => {
          e.currentTarget.src = '/images/placeholder.png';
        }}
      />
    </div>
  );
};

export default ImageComponent;
