import type { NextPage } from 'next'
import { useEffect } from 'react';

const Note: NextPage = () => {
    useEffect(() => {
        const notes = window.localStorage.getItem('notes');
        console.log(notes);
    },[]);
    return (<></>)
}

export default Note;