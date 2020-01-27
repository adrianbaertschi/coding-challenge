import React from "react";

const CodeLine: React.FC<{
    line: string;
}> = (props) => {

    return (
        <li>{props.line}</li>
    )
};

export default CodeLine