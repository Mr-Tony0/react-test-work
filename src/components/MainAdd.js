import ListTemplate from "./particles/list-tempalte";
import React from "react";

function MainAdd(props) {
    const inputName = React.createRef();
    const inputContent = React.createRef();
    {/* Добавление новой заметки */}
    const addListName = () => {
        let nameList = inputName.current.value;
        let ContentList = inputContent.current.value;
        if(nameList == ''){
            alert('Заполните поля для добавления заметки.');
        }else{
            props.addName(nameList,ContentList);
        }
    }
    return(
        <div className="main">
            <div className="main__content">
                <h2>Создание задачи</h2>
                <input type="text" ref={inputName} className="list__input"/>
                <textarea name="" ref={inputContent} className="list__input main__textarea"></textarea>
                <div className="main__buttonBlock">
                    <button className="list__button" onClick={addListName}>Добавить</button>
                </div>
            </div>
        </div>
    );
}
export default MainAdd;