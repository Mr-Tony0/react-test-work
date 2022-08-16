import React from "react";
import {NavLink} from "react-router-dom"

function MainEditContent(props) { 
    const inputName = React.createRef();
    const inputContent = React.createRef();
    const editCurrent = () => {
        let nameList = inputName.current.value;
        let ContentList = inputContent.current.value;
        props.edit(props.id, nameList, ContentList);
    }
    const delCurrent = () => {
        props.del(props.id);

    }
    return(
        <div className="main__content"> 
            <input type="text" ref={inputName} className="list__input" defaultValue={props.name}/>
            <textarea name="" ref={inputContent} className="list__input main__textarea" defaultValue={props.content}></textarea>
            <div className="main__buttonBlock">
                <NavLink to = '/' className="list__button">Назад</NavLink>
                <NavLink to='/'>
                    <button className="list__button" onClick={delCurrent}>Удалить</button>
                </NavLink>
                <button className="list__button" onClick={editCurrent}>Сохранить</button>
            </div>
        </div>
        
    );
    
}
export default MainEditContent;
 