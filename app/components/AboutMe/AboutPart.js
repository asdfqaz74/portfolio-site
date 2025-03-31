import Image from "next/image";

export default function AboutPart({ category, value, image, link }) {
  return (
    <div className="flex gap-4">
      <Image
        src={`/${image}.svg`}
        width={50}
        height={50}
        alt={category || "링크"}
      />
      <div className="flex flex-col gap-2 justify-center">
        {category && <span className="text-3xl font-bold">{category}</span>}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-amber-300 hover:underline hover:underline-offset-4 break-all"
          >
            {value}
          </a>
        ) : (
          <span className="text-xl">{value}</span>
        )}
      </div>
    </div>
  );
}
