import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import SnippetService from "../../service/SnippetService";
import CodeLine from "./CodeLine";
import "./SnippetDetail.css"


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
            <div className="content">
                <h2> {snippet.name} </h2>
                <h4> {snippet.description} </h4>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={'droppable'}>
                        {(provided) => (
                            <div ref={provided.innerRef}
                                 {...provided.droppableProps}>
                                {
                                    snippet.lines.map((line, index) => {
                                        return <CodeLine key={line.no}
                                                         line={line}
                                                         index={index}/>
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </DragDropContext>
                <button onClick={check}>Check</button>
            </div>
        );
    }
}