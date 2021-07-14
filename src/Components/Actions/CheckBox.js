import React from 'react'
import './checkBox.css';
export default function CheckBox(props) {
    const { taskId, checked, editTaskCheck} = props;
    return (
        <div>
            <input type="checkbox" id={taskId} checked={checked} onChange={() => editTaskCheck(taskId, !checked)}/>
                <label htmlFor={taskId} >
                    <div id="tick_mark" ></div>
                </label>
        </div>
    )
}
