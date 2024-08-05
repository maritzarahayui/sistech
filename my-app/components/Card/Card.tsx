import Image from "next/image";
import Link from "next/link";

type CardProps = {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
};

function Card({ thumbnail, title, description, url }: CardProps) {
  return (
    <div className="card sm:bg-pink lg:bg-invert w-72 p-4">
      <Image 
        src={thumbnail} 
        alt={title} 
        width={300} 
        height={300} 
        className="rounded-t-lg" />
      <h3 className="text-xl text-dark font-bold mt-2">{title}</h3>
      <p className="text-sm text-dark mt-2 overflow-hidden overflow-ellipsis">{description}</p>
      <Link href={url} className="text-blue-500 mt-4 inline-block">Click here</Link>
    </div>
  );
}

export type { CardProps };
export { Card };