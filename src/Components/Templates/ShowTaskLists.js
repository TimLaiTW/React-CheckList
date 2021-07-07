import React from 'react';
import styled from 'styled-components';
import Tasks from '../Templates/Tasks';
const Div = styled.div`
    width: 70%
`;
const ShowTaskLists = (props) => {
    const { taskList, editTaskCheck, editTaskName, deleteTask} = props;
    console.log(taskList)
    return (
        <Div>
            {taskList.map(todo => (
                <Tasks 
                    key={todo.id}
                    taskId={todo.id}
                    task={todo.name}
                    checked={todo.checked}
                    editTaskCheck={editTaskCheck}
                    editTaskName={editTaskName}
                    deleteTask={deleteTask}
                />
            ))}

        </Div>
    );
}
export default ShowTaskLists;