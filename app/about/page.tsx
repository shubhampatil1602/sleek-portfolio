import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <div className='flex min-h-screen items-start justify-start'>
      <Container className='min-h-[200vh] p-4 md:pt-20 md:pb-10'>
        <h1 className='text-primary text-2xl font-bold tracking-tight md:text-4xl'>
          AboutMe
        </h1>
        <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
          I’m a frontend engineer focused on building reliable, responsive web
          applications using React and Tailwind CSS. I care about clean code,
          good design, and solving real problems through thoughtful development.
          Currently, I’m expanding my skills by learning full-stack development
          to build more complete and scalable solutions.
        </p>
      </Container>
    </div>
  );
}
