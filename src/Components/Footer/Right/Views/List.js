import React, {useState} from 'react'

const List = (props) => {
    let list = props.ToDoLists[props.actToDo].list.map((e, index) => (
        <div className={'Todo__element'}>
            <li key={index}>{e}</li><i className="fas fa-check"></i><i className="fas fa-recycle" onClick={() => props.removeElement(index)}></i>
        </div>))
    return (
        <>
            {list}
        </>
    )
}

export default List;