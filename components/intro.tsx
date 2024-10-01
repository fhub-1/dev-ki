import Image from 'next/image'
import authorImage from '@/public/images/authors/josephki.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Joseph Kitheka.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a versatile software engineer based in Kenya, specializing in network software development,
          server setup, and mobile app development. With a passion for cutting-edge technologies,
          I create robust solutions across various platforms. I thrive on learning and sharing
          knowledge, always eager to tackle new challenges in the ever-evolving tech landscape.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Joseph Kitheka'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}