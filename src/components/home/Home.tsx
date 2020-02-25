import React from "react";
import SnippetList from "./SnippetList";
import SnippetService from "../../service/SnippetService";

export const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <SnippetList snippets={new SnippetService().all}/>
        </div>
    )
};