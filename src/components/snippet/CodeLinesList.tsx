import React from "react";
import CodeLine from "./CodeLine";
import {Droppable} from "react-beautiful-dnd";
import "./CodeLinesList.css"

export interface Line {
    no: number;
    code: string;
}

const CodeLinesList: React.FC<{
        code: Line[]
    }> = (props) => {

        return (
            <Droppable droppableId={'droppable'}>
                {(provided) => (
                    <div className="code-lines-list"
                         ref={provided.innerRef}
                         {...provided.droppableProps}>
                        {
                            props.code.map((line, index) => {
                                return <CodeLine key={line.no}
                                                 line={line}
                                                 index={index}/>
                            })
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }
;
export default CodeLinesList;