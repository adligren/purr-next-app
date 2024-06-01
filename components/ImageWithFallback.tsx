"use client";

import Image, { ImageProps } from "next/image";
import { ReactElement, SyntheticEvent, useState } from "react";

type ImageWithFallbackProps = ImageProps & {
  fallback: ReactElement;
};

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const { fallback, alt, onError, ...imageProps } = props;

  const onInternalError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    onError?.(e);
    setError(true);
  };

  if (error) return <fallback.type {...fallback.props} />;

  return <Image alt={alt} onError={onInternalError} {...imageProps} />;
}
