import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";
import * as actions from "@/actions";

interface SnippetShowPageProps {
    params: {
        id: string
    }
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
    // await new Promise((resolve, reject) => setTimeout(resolve,2000)); // artifical timeout
    const Snippets = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id),
        }
    })
    if (!Snippets) { return notFound(); }
    const deletesnippet=actions.deleteSnippet.bind(null,Snippets.id);
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-2xl font-bold">{Snippets.title}</h1>
                <div className="flex gap-4">
                    <Link href={`${Snippets.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </Link>
                   <form action={deletesnippet}>
                   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Delete
                    </button>
                   </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{Snippets.code}</code>
            </pre>
        </div>
    );
}