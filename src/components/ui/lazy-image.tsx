import { type ImgHTMLAttributes, useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> & {
  eager?: boolean;
};

export function LazyImage({ className, eager, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <img
      {...props}
      ref={imgRef}
      loading={eager ? "eager" : "lazy"}
      onLoad={onLoad}
      className={cn("lazy-image", loaded && "loaded", className)}
    />
  );
}
