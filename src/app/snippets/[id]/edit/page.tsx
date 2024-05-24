import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditFormprops from "@/components/snippet-edit-form";
interface SnippetEditpageprops{
params:{
    id:string
}
}
export default async function SnippetEditpage(props:SnippetEditpageprops){
    const id=parseInt(props.params.id);

    const Snippets= await db.snippet.findFirst({
        where:{ id }
    })
    if(!Snippets){
        return notFound();
    }
    return  <div>
        <SnippetEditFormprops snippet={Snippets} />
    </div>
}
