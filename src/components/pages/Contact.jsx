import React from 'react'
import Banner from './common/Banner'
import Contactsec from './contact/contactsec'
import { useTranslation } from 'react-i18next'
const Contact = () => {

  const { t } = useTranslation();
  return (
    <>
    <Banner title={t('contact.0')}/>
    <Contactsec />
    </>

  )
}

export default Contact
