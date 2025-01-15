import { useState } from "react";

export const NumPageCard = ({numpage, fetchQuery, query, setLoading, setActivePage, activePage, minPrice, maxPrice, condition, orderBy})=>{
    
    const toInactivePage = ()=>{
        localStorage.removeItem('searching-storage')
        setActivePage(numpage)
        setLoading(true)
        fetchQuery(query, numpage, minPrice, maxPrice, condition, orderBy )
    }

    const toActivePage = ()=>{
        setActivePage(numpage)
        setLoading(false)
    }

    return (
        <>
            <li>
                <a className={`${activePage===numpage?'font-black':''}`} numpage={numpage} href="#" onClick={(e)=>{
                    {

                        e.preventDefault()
                        numpage!==activePage?(
                            toInactivePage()
                    ):(
                        toActivePage()
                    )
                
                }
                
            }}>
                {numpage}
                </a>
            </li>
        </>
    )
}