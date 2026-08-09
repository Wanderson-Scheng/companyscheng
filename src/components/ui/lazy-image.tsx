import { useState, useCallback, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> & {
  eager?: boolean;
};

export function LazyImage({ className, eager, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <img
      {...props}
      loading={eager ? "eager" : "lazy"}
      onLoad={onLoad}
      className={cn("lazy-image", loaded && "loaded", className)}
    />
  );
}
