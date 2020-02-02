import React from 'react';
import './App.css';
import CodeLinesList from "./CodeLinesList";
import {DragDropContext} from 'react-beautiful-dnd';

const App: React.FC = () => {

    function onDragEnd() {
    }

    function check() {
        // TODO check
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <CodeLinesList/>
            </DragDropContext>
            <button onClick={check}>Check</button>
        </div>
    );
};


export default App;
