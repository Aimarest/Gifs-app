import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['FRIENDS', 'BAILE', 'ANIMALS']);

    const handleAddCategory = (newCategory) => {

        if(categories.includes(newCategory.toUpperCase())) return;

        setCategories([newCategory.toUpperCase(),...categories ])
    }
    return (
        <>

            <header className='header'>
                <h1> GifExpertApp </h1>
                <AddCategory handleAddCategory={handleAddCategory} />
            </header>
            {
                categories.map((category) => (

                    <GifGrid category={category} key={category} />

                )

                )
            }

        </>
    );
}

