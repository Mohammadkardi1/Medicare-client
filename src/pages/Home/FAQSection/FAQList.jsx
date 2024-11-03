import React from 'react'
import {faqs} from '../../../assets/data/faqs'
import FAQCard from './FAQCard'

const FAQList = () => {
  return (
    <div className='space-y-6'>
      {faqs.map((faq, index) => (
        <FAQCard faq={faq} key={index}/>
      ))}
    </div>
  )
}

export default FAQList
