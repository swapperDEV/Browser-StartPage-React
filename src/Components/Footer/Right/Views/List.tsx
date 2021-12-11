import React, {useState} from 'react'

const List = (props:any) => {
    let list = props.ToDoLists[props.actToDo].list.map((e:any, index:any) => {
    let classes
    if(e.isComplete === false) {
        classes = ''
    } else {
        classes = 'Todo__el_complete'
    }
    return (
        <li key={index} className={'Todo__element '}><p className={`${classes} resetP`}>{e.name}</p>
            <i className="fas fa-check liIcon" onClick={() => props.completeElement(index)}></i><i className="fas fa-recycle liIcon" onClick={() => props.removeElement(index)}></i>
        </li>
    )})
    return (
        <>
            {list}
        </>
    )
}

export default List;