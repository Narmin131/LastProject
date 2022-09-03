import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon = styled.svg`
  transition: all .5s linear;
`;
const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
    const ActiveMode = async () => {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            await localStorage.setItem('Theme', 'light');
        }
        if (darkMode === false) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            await localStorage.setItem('Theme', 'dark');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('Theme') === 'light') {
            document.body.classList.add('light');

        } else if (localStorage.getItem('Theme') === 'dark') {
            document.body.classList.add('dark');
            setDarkMode(!darkMode);
        }

    }, []);

    return (
        <button onClick={ActiveMode} className='mode'>
            {!darkMode
                ?
                <Moon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
                :
                <Sun xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#201d1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></Sun>
            }
        </button>
    )
}

export default Theme