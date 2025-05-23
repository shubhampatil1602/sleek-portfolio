import { Container } from "@/components/container";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className='flex min-h-screen items-start justify-start'>
      <Container className='min-h-[200vh] p-4 md:pt-20 md:pb-10'>
        <h1 className='text-primary text-2xl font-bold tracking-tight md:text-4xl'>
          Shubham Patil
        </h1>
        <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as an intern and looking
          for a frontend engineer or full stack engineer role.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
