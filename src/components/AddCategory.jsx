import { useState } from "react";

 export const AddCategory = ( { handleAddCategory } ) => {

    const [newCategory, setNewCategory] = useState('');

    const handleAdd = (event) => {

        setNewCategory(event.target.value);
      
    }
    const onSubmit = (event) => {
        event.preventDefault(); 
       
        if( newCategory.trim().length < 1 ) return;   //trim() lo que hace es borrar los espacios en blanco que haya.
        handleAddCategory( newCategory.trim() )
        setNewCategory('');
    }
    const handleClick = () =>{
        if( newCategory.trim().length < 1 ) return;   
        handleAddCategory( newCategory.trim() )
        setNewCategory('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Buscar gifs' onChange={handleAdd} value={newCategory}></input>
            <button onClick={ handleClick }> Add a new category </button>
        </form>
    )
}
