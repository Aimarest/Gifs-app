import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Friends', 'Baile', 'Animals']);

    const handleAddCategory = (newCategory) => {

        if(categories.includes(newCategory.toLowerCase())) return;

        setCategories([newCategory.toLowerCase(),...categories ])
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

export default GifExpertApp;
