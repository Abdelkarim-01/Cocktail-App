import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const cocktailSearchUrl= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async ()=>{
  // 1173 other first approch  
  const searchTerm= ''
  const response=await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  
  return {
    drinks:response.data.drinks,
    searchTerm
  };
}

const Landing = () => {
  const {drinks,searchTerm} = useLoaderData();
  
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks}/>
    </>
  )
}

export default Landing