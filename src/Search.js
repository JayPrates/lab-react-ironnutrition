import { Card, Row, Col, Divider, Input, Button } from "antd";
import React, { useState } from "react";


function Search({ searchFood }) {
    const [search, setSearch] = useState(""); 
    const searchTerms = (e) => {
        setSearch(e.target.value);
        searchFood(e.target.value);
    }    
    return (
        <>
            <label>Search</label>
            <input type="text" onChange={searchTerms} value={search} />        
        </>
    )
} 

export default Search;