import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick = () => {
        history.goBack();
    };
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ,
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
        </>
    );
};

export default TaskDetails;