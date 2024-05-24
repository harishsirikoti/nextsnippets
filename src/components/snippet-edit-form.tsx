'use client'
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actios from "@/actions";

interface SnippetEditFormprops {
    snippet: Snippet
}
export default function SnippetEditpage({ snippet }: SnippetEditFormprops) {
    const [code,setCode] = useState(snippet.code);
    const handleEditorChange = (value: string = '') => {
        setCode(value);
    };
    const editSnippetAction= actios.editSnippet.bind(null, snippet.id,code);

    return <div>
        <Editor
            height='40vh'
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={snippet.code}
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
        />
        <form action={editSnippetAction}>
            <button type="submit" className="p-2 border rounded">Save</button>
        </form>
    </div>
}