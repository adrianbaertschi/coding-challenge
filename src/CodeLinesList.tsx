import React from "react";
import CodeLine from "./CodeLine";

const CodeLinesList: React.FC = () => {

    const codeData: Map<number, string> = new Map([
        [1, 'abc'],
        [2, 'def'],
        [3, 'ghi'],
    ]);

    const lines = Array.from(codeData).map(([key, value]) => {
        return <CodeLine key={key} line={value}/>
    });

    return (
        <div>
            <ul>{lines}</ul>
        </div>
    )
};


export default CodeLinesList;