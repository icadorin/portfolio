import React from 'react';

interface ImageComponentProps {
  imageName: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  folder: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  imageName,
  alt,
  className = '',
  onClick,
  size,
  width,
  height,
  maxWidth,
  folder = '',
}) => {
  const [hasError, setHasError] = React.useState(false);

  const imagePath = `/assets/${folder}/${imageName}`;

  if (hasError) {
    return null;
  }

  const style: React.CSSProperties = {
    width: width || size || '100%',
    height: height || 'auto',
    maxWidth: maxWidth || '100%',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div className={`image-wrapper ${className}`} onClick={onClick}>
      <img
        src={imagePath}
        alt={alt}
        className="image-content"
        style={style}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default ImageComponent;
