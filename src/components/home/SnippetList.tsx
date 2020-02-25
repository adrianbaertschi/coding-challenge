import React from "react";
import "../snippet/SnippetDetail.css"
import {Link} from "react-router-dom";
import {Snippet} from "../../model/Model";


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