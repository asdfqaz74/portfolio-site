import Image from "next/image";

export default function AboutPart({ category, value, image, link }) {
  return (
    <div className="flex gap-4">
      <Image src={`/${image}.svg`} width={50} height={50} alt={category} />
      <div className="flex flex-col gap-2 justify-center">
        <span className="text-3xl font-bold">{category}</span>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-400 hover:underline break-all"
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
