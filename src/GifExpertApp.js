import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// rafc
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One piece']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setCategories={setCategories} />

            <ol>
            {
                categories.map(c => <GifGrid category={c} key={c} />)
            }
            </ol>
        </>
    )
}
