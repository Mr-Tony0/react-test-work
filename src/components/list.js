import ListTemplate from "./particles/list-tempalte";
import React from "react";


function List(props) {
    {/* Вывод названий всех заметок */}
    const name = props.data.map((element) => {
        return <ListTemplate name = {element.name} content = {element.content} id = {element.id} />
    })
    return(
        <aside className="list">
            <h2>Список</h2>
            <div className="list__content">
                <ul>
                   {name}
                </ul>
            </div>
        </aside>
    );
}
export default List;