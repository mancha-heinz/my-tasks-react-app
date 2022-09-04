import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg';

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
        >
            <div className="task-tile" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button
                    className="remove-task-button"
                    onClick={() => handleTaskDelete(task.id)}
                ><CgClose /></button>
                <button
                    className="see-tasks-details-button"
                //onClick={}
                ><CgInfo /></button>
            </div>
        </div>
    );
};

export default Task;