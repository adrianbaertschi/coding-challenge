import React from "react";
import "../snippet/CodeLinesList.css"
import {Link} from "react-router-dom";
import {Line} from "../snippet/CodeLinesList";

export interface Snippet {
    name: string;
    description: string;
    lines: Line[]
}

const SnippetList: React.FC<{
        snippets: Snippet[]
    }> = (props) => {
        return (
            <div className="snippet-list">
                {
                    props.snippets.map((snippet, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/snippet/${index}`}>{snippet.name} </Link>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
;
export default SnippetList;