import React from "react";
import {Draggable} from "react-beautiful-dnd";
import './CodeLine.css';
import {Line} from "../../model/Model";

const CodeLine: React.FC<{
    index: number;
    line: Line;
}> = (props) => {
    return (
        <Draggable draggableId={props.line.no.toString()}
                   index={props.index}>
            {(provided) => (
                <div className="line"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.line.code}
                </div>
            )}
        </Draggable>
    )
};

export default CodeLine