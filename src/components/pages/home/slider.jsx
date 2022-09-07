import React from 'react'
import { useTranslation } from 'react-i18next'

const Slider = () => {
    const { t } = useTranslation();
    return (
        <div className="slider">
            <div className="slider-main">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <p>{t('hero.0')}</p>

                            </div>
                            <div className='col-lg-12 d-flex justify-content-center'>
                                <h3>{t('hero.1')}</h3>
                            </div>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <h3>{t('hero.2')} <span>{t('hero.3')}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider