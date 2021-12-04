import React, {useState, useRef, useEffect} from 'react'
import Wrapper from '../../../../UI/Wrapper'
import { Fade } from 'react-awesome-reveal'
import List from './List'

const TodoList = () => {
    const [ToDoLists, changeToDoLists] = useState([{name: 'Daily', list: []}])
    const [actToDo, changeToDo] = useState(0)
    const [configActive, changeConfigActive] = useState(false)
    const [startDisplay, changeStartDisplay] = useState(true)
    const [NewToDoValue, ChangeNewToDoValue] = useState('')
    //@ts-ignore
    const ToDoListsDisplay = ToDoLists.map((e, index) => {
        return (
            <li key={index}>{e.name} 
            : {e.list.length}</li>
        )
    })
    const handleSwitchTodo = () => {
        console.log('handle');
        changeConfigActive(!configActive)
    }
    const inputToDo = useRef()
    const updateList = (list) => {
        changeToDoLists(list)
        console.log(ToDoLists[actToDo]);
    }
    const submitTodo = (e) => {
        //@ts-ignore
        if(e.key === 'Enter' && inputToDo.current.value.length > 2) {
            let value = NewToDoValue
            ChangeNewToDoValue('')
            let actToDoName = ToDoLists[actToDo].name
            let newToDoLists = ToDoLists
            newToDoLists.map((e) => {
                if(e.name === actToDoName) {
                    e.list.push(value)
                }
            })
            updateList(newToDoLists)
            changeStartDisplay(false)
        }
    }
    const removeElement = (index) => {
        console.log(index);
        let FullList = ToDoLists
        //@ts-ignore
        FullList[actToDo].list.splice(index,1)
        changeToDoLists(FullList)
        console.log(ToDoLists);
        ChangeNewToDoValue(`Deleted ${index}`)
    }

    //@ts-ignore
    useEffect(() => {
        if(ToDoLists[actToDo].list.length === 0) {
            changeStartDisplay(true)
        }
    })
    const updateNewToDoValue = (e) => {
        ChangeNewToDoValue(e.target.value)
    }
    return (
        <Wrapper classes='ToDoView'>
            <div className='todo__config'>
                <p>{ToDoLists[actToDo].name} <i onClick={handleSwitchTodo} className="fas fa-chevron-down"></i></p>
            </div>
            <div className={`todo__change_config ${configActive && 'todo_change_active'}`}>
                <Fade>
                <ul className='todo__change_lists'>
                    {ToDoListsDisplay}
                    <li className='addNew'><i className="fas fa-plus"></i> Add new</li>
                </ul>
                </Fade>
            </div>
            <div className={'todo__list'}>
                {startDisplay ?
                <div className={'nothing__todo'}>
                    <p>Add a new todo to start</p>
                    {
                        //@ts-ignore
                        <button onClick={() => console.log(inputToDo.current.focus())}>New ToDo</button>
                    }
                </div>:
                <div className={'todo__display'}>
                    <ul>
                        <List removeElement={removeElement} ToDoLists={ToDoLists} actToDo={actToDo}/>
                    </ul>
                </div>
                }
            </div>
            <div className={'new__todo_form'}>
                {//@ts-ignore
                <input ref={inputToDo} value={NewToDoValue} onChange={updateNewToDoValue} maxLength={20} placeholder='New todo' onKeyPress={submitTodo}/>                
                }
            </div>
        </Wrapper>
    )
}

export default TodoList