import React from 'react';
import './App.css';
import CodeLinesList from "./CodeLinesList";
import {DragDropContext} from 'react-beautiful-dnd';

const App: React.FC = () => {

    function onDragEnd() {
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <CodeLinesList/>
        </DragDropContext>
    );
}

export default App;
