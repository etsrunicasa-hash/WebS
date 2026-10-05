import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
};

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <Image
      alt={alt}
      className="relative z-10 object-contain p-2 drop-shadow-[0_4px_6px_rgba(17,24,20,0.12)] sm:p-3"
      fill
      sizes="(max-width: 640px) 150px, 180px"
      src={src}
    />
  );
}
