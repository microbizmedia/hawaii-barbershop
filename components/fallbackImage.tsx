'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

interface FallbackImageProps extends ImageProps {
  wrapperClassName?: string;
  loaderClassName?: string;
  loaderText?: string;
}

export default function FallbackImage({
  wrapperClassName = '',
  loaderClassName = '',
  loaderText = 'Loading...',
  ...props
}: FallbackImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx('relative', wrapperClassName)}>
      {!loaded && (
        <div className={clsx(
          'absolute inset-0 flex items-center justify-center bg-black z-10 text-white text-sm',
          loaderClassName
        )}>
          {loaderText}
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
