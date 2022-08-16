import ListTemplate from "./particles/list-tempalte";
import React from "react";

function MainAdd(props) {
    const inputName = React.createRef();
    const inputContent = React.createRef();
    const addListName = () => {
        let nameList = inputName.current.value;
        let ContentList = inputContent.current.value;
        if(nameList == '' || ContentList == ''){
            alert('Заполните поля для добавления заметки.');
        }else{
            props.addName(nameList,ContentList);
        }
    }
    return(
        <div className="main">
            <h2>Создание задачи</h2>
            <div className="main__content">
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