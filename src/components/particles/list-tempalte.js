import React from "react";

function ListTemplate(list) { 
    const listOption = () => {
        console.log(list.content);
    }   
    return <li onClick={listOption}>{list.name}</li>;
}
export default ListTemplate;