import React from "react";
import {useParams} from "react-router-dom"
import MainEditContent from "./particles/MainEditContent";

function MainAdd(props) {
    const { id } = useParams();
    const edits = props.data.map((element) => {
        if(id == element.id){
           return <MainEditContent name = {element.name} content = {element.content} addName = {props.addName} id = {id} edit = {props.edit} del = {props.del} />
            
        }
    })
    return(
        <div className="main">
            <h2>Редактирование задачи</h2>
            {edits}
        </div>
    );
}
export default MainAdd;