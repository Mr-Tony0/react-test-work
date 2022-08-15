import {renderAll} from '../render'
const data = {
    allList : [
        {
            name: 'red 1',
            content: 'test'  
        },
        {
            name: 'red 2',
            content: 'test'
        }
      ]
}
export const addName = (name, content) => {
    let newList = {
        name, 
        content
    };
    data.allList.push(newList);
    console.log(data.allList);
    renderAll(data);
}

export default data;
