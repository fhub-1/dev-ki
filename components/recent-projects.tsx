import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground"
        >
         View all posts <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}