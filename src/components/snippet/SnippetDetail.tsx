import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {DragDropContext} from "react-beautiful-dnd";
import CodeLinesList from "./CodeLinesList";
import SnippetService from "../../service/SnippetService";

interface TParams {
    id: string
}

// TODO use React.FC
export class SnippetDetail extends React.Component<RouteComponentProps<TParams>> {
    render() {
        let {match} = this.props;

        function onDragEnd() {
            // TODO impl to keep changes
        }

        function check() {
            // TODO
        }

        const snippet = new SnippetService().findSnippet(parseInt(match.params.id));

        return (
            <div>
                <h2>This is a page for Snippet with ID: {match.params.id} </h2>
                <DragDropContext onDragEnd={onDragEnd}>
                    <CodeLinesList code={snippet.lines}/>
                </DragDropContext>
                <button onClick={check}>Check</button>
            </div>
        );
    }
}