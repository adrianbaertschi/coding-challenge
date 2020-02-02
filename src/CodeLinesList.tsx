import React from "react";
import CodeLine from "./CodeLine";
import {Droppable} from "react-beautiful-dnd";
import "./CodeLinesList.css"

export interface Line {
    no: number;
    code: string;
}

const CodeLinesList: React.FC = () => {

        const codeData: Line[] = [
            {no: 1, code: 'abc'},
            {no: 2, code: 'def'},
            {no: 3, code: 'ghi'},
        ];

        return (
            <Droppable droppableId={'droppable'}>
                {(provided, snapshot) => (
                    <div className="code-lines-list"
                        ref={provided.innerRef}
                         {...provided.droppableProps}>
                        {
                            codeData.map((line, index) => {
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