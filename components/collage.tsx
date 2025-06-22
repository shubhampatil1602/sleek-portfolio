import Image from "next/image";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function Collage() {
  const items = [
    {
      title: "Kashtabhajan",
      image:
        "https://res.cloudinary.com/dgiyltklg/image/upload/v1750522512/portfolio/about/4.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Gwalior",
      image:
        "https://res.cloudinary.com/dgiyltklg/image/upload/v1750522510/portfolio/about/5.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Heaven",
      image:
        "https://res.cloudinary.com/dgiyltklg/image/upload/v1750522506/portfolio/about/6.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Daman",
      image:
        "https://res.cloudinary.com/dgiyltklg/image/upload/v1750522995/portfolio/about/8.webp",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Banars",
      image:
        "https://res.cloudinary.com/dgiyltklg/image/upload/v1750522519/portfolio/about/2.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip">
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            height={100}
            width={100}
            placeholder="blur"
            blurDataURL="/blur-placeholder.jpg"
            className="pointer-events-none relative z-10 h-40 w-80 object-cover"
          />
          <h3 className="mt-2 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
