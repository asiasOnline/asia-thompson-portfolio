import React from 'react'
import PageHeader from './ui/PageHeader'
import { TbMail, TbMailFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <div id="contact">
        <PageHeader title='Contact'/>
        <div>
          <div>
            <h2>Let's Work Together!</h2>
            <p>Fill out the form to get in contact me as soon as possible. Otherwise, contact me through your preferred platform and I’ll do my best to follow up there as well.</p>
            <div>
              <TbMailFilled className='w-8 h-8'/>
            </div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default Contact