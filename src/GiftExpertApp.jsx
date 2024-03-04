import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Dios','Jesus']);

    const onAddCategory = (onNewCategory) =>{
        if(categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories ]);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
            //setCategories = { setCategories }
            onNewCategory = { (value) => onAddCategory(value)} 
        />

        {
            categories.map(category =>(
                <GiftGrid 
                    key = {category} 
                    category= { category } 
                /> 
                )
            )
        }
    
    </>
  )    
}
