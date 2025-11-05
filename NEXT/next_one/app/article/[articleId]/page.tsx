"use client"
import Link from "next/link"
import { use } from "react"

interface Props {
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ lang?: "en" | "np" }>
}

const Page = ({ params, searchParams }: Props) => {
    const { articleId } = use(params)
    const { lang } = use(searchParams)

    return (
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>
            <div className="flex items-center gap-4">
                <Link href={`/article/${articleId}?lang=en`}>English</Link>
                <Link href={`/article/${articleId}?lang=np`}>Nepali</Link>
            </div>
        </div>
    )
}

export default Page
