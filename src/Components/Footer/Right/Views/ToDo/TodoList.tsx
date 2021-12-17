import React, {useState, useRef, useEffect} from 'react'
import Wrapper from '../../../../../UI/Wrapper'
import { Fade } from 'react-awesome-reveal'
import List from './List'

const TodoList = () => {
    const [ToDoLists, changeToDoLists] = useState([{name: 'Daily', list: []}])
    const [actToDo, changeToDo] = useState(0)
    const [configActive, changeConfigActive] = useState(false)
    const [startDisplay, changeStartDisplay] = useState(true)
    const [NewToDoValue, ChangeNewToDoValue] = useState('')
    const [errorMessage, setError] = useState('')
    const [tc__special_class, changeSpecialClassTC] = useState(false)
    const [newListValue, changeNewListValue] = useState('')

    const saveList = () => {
        localStorage.setItem("listData", JSON.stringify(ToDoLists));
    }
    const handleChangeActiveList = (index:number) => {
        changeToDo(index)
        changeConfigActive(false)
        if(ToDoLists[index].list.length !== 0) {
            changeStartDisplay(false)
        }
    }
    const removeList = (index:any) => {
        let FullList = ToDoLists
        //@ts-ignore
        FullList.splice(index,1)
        changeToDoLists(FullList)
        setError(`Deleted List ${index}`)
        changeToDo(0)
        saveList()
    }
    const ToDoListsDisplay = ToDoLists.map((e, index) => {
        return (
            <li key={index}>{e.name} 
            : 
            {` ${e.list.length}`} {<i onClick={() => handleChangeActiveList(index)} className="far fa-hand-paper"></i>} {
            //@ts-ignore
            index !== 0 && <i className="fas fa-minus-square" onClick={() => removeList(index)}></i>}</li>
        )
    })
    const handleSwitchTodo = () => {
        console.log('handle');
        changeConfigActive(!configActive)
        changeSpecialClassTC(!tc__special_class)
    }
    const inputToDo = useRef()
    const updateList = (list:any) => {
        changeToDoLists(list)
        console.log(ToDoLists[actToDo]);
    }
    const submitTodo = (e:any) => {
        //@ts-ignore
        if(e.key === 'Enter' && inputToDo.current.value.length > 2) {
            let value = NewToDoValue
            ChangeNewToDoValue('')
            let actToDoName = ToDoLists[actToDo].name
            let newToDoLists = ToDoLists
            newToDoLists.map((e:any) => {
                if(e.name === actToDoName) {
                    //@ts-ignore
                    e.list.push({
                        name: value,
                        isComplete: false,
                    })
                }
            })
            updateList(newToDoLists)
            changeStartDisplay(false)
            saveList()
        }
    }
    const removeElement = (index:any) => {
        let FullList = ToDoLists
        //@ts-ignore
        FullList[actToDo].list.splice(index,1)
        changeToDoLists(FullList)
        setError(`Deleted ${index}`)
        saveList()
    }
    const completeElement = (index:any) => {
        let FullList = ToDoLists
        //@ts-ignore
        FullList[actToDo].list[index].isComplete = !FullList[actToDo].list[index].isComplete 
        changeToDoLists(FullList)
        setError(`disComplete ${index}`)
        saveList()
    }
    const addNewLists = () => {
        if(newListValue !== '') {
            const FullList = ToDoLists 
            FullList.push({
                name: newListValue,
                list: [],
            })
            console.log(FullList);
            changeToDoLists(FullList)
            changeToDo(FullList.length - 1)
            changeNewListValue('')
            setError('ok i add list')
            saveList()
        }
    }
    const updateNewToDoValue = (e:any) => {
        ChangeNewToDoValue(e.target.value)
    }
    const handleChangeNewListValue = (e:any) => {
        changeNewListValue(e.target.value)
    }
    const handleAddNewLists = (e:any) => {
        if(e.key === 'Enter') {
            addNewLists()
        }
    }
    useEffect(() => {
        setError('')
        if(ToDoLists[actToDo].list.length === 0) {
            changeStartDisplay(true)
        }
    })
    useEffect(() => {
        //@ts-ignore
        let listData:any = JSON.parse(localStorage.getItem("listData"))
        if(listData !== null && listData !== 'null') {
            changeToDoLists(listData)
            changeStartDisplay(false)
        }
    },[])
    return (
        <Wrapper classes='ToDoView'>
            <div className='todo__config'>
                <p>{ToDoLists[actToDo].name} <i onClick={handleSwitchTodo} className={`fas fa-chevron-down ${tc__special_class && 'rotated'}`}></i></p>
            </div>
            <div className={`todo__change_config ${configActive && 'todo_change_active'}`}>
                <Fade>
                <ul className='todo__change_lists'>
                    {ToDoListsDisplay}
                    <input className='todo__input' value={newListValue} onChange={handleChangeNewListValue} placeholder='...' onKeyPress={handleAddNewLists}/>
                    <li className='addNew' onClick={addNewLists}><i className="fas fa-plus"></i>Add new</li>
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
                        <List removeElement={removeElement} completeElement={completeElement} ToDoLists={ToDoLists} actToDo={actToDo}/>
                    </ul>
                </div>
                }
            </div>
            <div className={'new__todo_form'}>
                <p className='error'>{errorMessage}</p>       
                {//@ts-ignore
                <input ref={inputToDo} value={NewToDoValue} onChange={updateNewToDoValue} maxLength={20} placeholder='New todo' onKeyPress={submitTodo}/>         
                }
            </div>
        </Wrapper>
    )
}

export default TodoList