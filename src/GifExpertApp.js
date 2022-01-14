import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categorias,setCategories] = useState(['One Punch']);

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>
            {
                categorias.map(category =>  
                  <GifGrid 
                    key={ category } 
                    category={ category }
                  />
                )
            }
        </ol>
      </>
    )
  }
