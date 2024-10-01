import { getPosts } from "@/lib/posts"
import Posts from "./post"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default async function RecentPost(){
    const posts = await getPosts()
    return(
        <section className="pb-24">
            <div>
                <h2 className="title mb-12">Recent Post</h2>
                <Posts posts={posts} />


                <Link href="/posts"  className="mt-8 inline-flex items-center gap-2 text-muted-foreground">View all posts <ArrowRightIcon className="w-4 h-4" /></Link>
            </div>
        </section>
    )
}