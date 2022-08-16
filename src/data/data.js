import {renderAll} from '../render'
const data = {
    allList : [
        
    ]
}
export const addName = (name, content) => {
    let newList = {
        id: data.allList.length + 1,
        name, 
        content
    };
    data.allList.push(newList);
    renderAll(data);
}
export const edit = (id, name, content) => {
    data.allList.map((element) => {
        if(element.id == id){
            element.name = name;
            element.content = content;
        }
    })
    renderAll(data);
}
export const del = (id) => {
    const index = data.allList.findIndex(n => n.id == id);
    console.log(index);
    if (index !== -1) {
        data.allList.splice(index, 1);
      }
     renderAll(data);
}

export default data;
