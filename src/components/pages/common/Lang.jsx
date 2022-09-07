import React from 'react'
import { useTranslation } from 'react-i18next'
import "../common/i18"

const Lang = () => {

    const { i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <button className='lang' onClick={() => handleClick('en')}>En</button>
            <button className='lang' onClick={() => handleClick('fr')}>Fr</button>
        </div>
    )
}

export default Lang