import React, { useState } from "react";
import img from './Todo.jpg'


const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [upDateItem, setUpDateItem] = useState(true);
    const [IsEditItems, setIsEditItems] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('please fill the Data');
        } else if (inputData && !upDateItem) {
            setItems(
                items.map((elem) => {
                    if (elem.id === IsEditItems) {
                        return { ...elem, name: inputData }
                    }
                    return elem;

                })

            )
            setUpDateItem(true);
            setInputData('');
            setIsEditItems(null);

        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }

    }
    const deleteItem = (index) => {
        const Updateditems = items.filter((elem) => {
            return index != elem.id;

        });
        setItems(Updateditems);
    }
    const removeAll = () => {
        setItems([]);

    }
    const editItem = (index) => {
        let newEditItem = items.find((elem) => {
            return elem.id === index;

        });
        setUpDateItem(false);
        setInputData(newEditItem.name);
        setIsEditItems(index);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={img} alt="todologo" />
                        <figcaption> Add Your List Here.🤑  </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" name="" placeholder="✍️ Add Items.."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            upDateItem ? <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i> :
                                <i className="far fa-edit add-btn" title="Edit Items" onClick={addItem}></i>


                        }


                    </div>
                    <div className="showItems">
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Items" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                    </div>

                                )

                            })


                        }



                    </div>
                    {/* clear all btn  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}> <span> CHECK LIST</span></button>

                    </div>

                </div>

            </div>

        </>
    );

};
export default Todo;