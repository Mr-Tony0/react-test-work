import React from "react";
import {useParams} from "react-router-dom"
import MainEditContent from "./particles/MainEditContent";

function MainAdd(props) {
    {/* Получение id текщей заметки из url */}
    const { id } = useParams();
    {/* Получение объекта с данными и вывод соответствующей компоненты */}
    const edits = props.data.map((element) => {
        if(id == element.id){
           return <MainEditContent name = {element.name} content = {element.content} addName = {props.addName} id = {id} edit = {props.edit} del = {props.del} />
        }
    })
    return(
        <div className="main">
            {edits}
        </div>
    );
}
export default MainAdd;