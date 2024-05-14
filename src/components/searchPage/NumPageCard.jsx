import { useState } from "react";

export const NumPageCard = ({numPage, fetchQuery, query, setLoading, setActivePage, activePage})=>{
    
    const toInactivePage = ()=>{
        localStorage.removeItem('searching-storage')
        setActivePage(numPage)
        setLoading(true)
        fetchQuery(query, numPage )
    }

    const toActivePage = ()=>{
        setActivePage(numPage)
        setLoading(false)
    }

    return (
        <>
            <li>
                <a className={`${activePage===numPage?'font-black':''}`} numPage={numPage} href="javascript:void(0)" onClick={()=>{
                    {
                        numPage!==activePage?(
                            toInactivePage()
                    ):(
                        toActivePage()
                    )
                
                }
                
            }}>
                {numPage}
                </a>
            </li>
        </>
    )
}