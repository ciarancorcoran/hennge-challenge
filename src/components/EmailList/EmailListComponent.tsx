import React, { FunctionComponent } from 'react'
import ToEmailListComponent from './ToEmailListComponent'
import EmailBodyComponent from '../EmailBody/EmailBodyComponent'

import { IEmail } from '../../constants/IEmail'
import { NoEmails, EmailList } from './EmailListComponentStyles'

import iconArrow2 from '../../assets/icon_arrow02.svg'
import iconMail from '../../assets/icon_mail_sp.svg'
import attachmentImg from '../../assets/icon_clip.svg'
import logo from '../../assets/logo.png'

interface IProps {
  emails: readonly IEmail[]
  showEmailBody: (idToAddOrRemove: number) => void
  emailBodiesToShow: number[]
  activeItem: string
  formatDate: (date: Date) => void
}

const EmailListComponent: FunctionComponent<IProps> = ({
  emails,
  showEmailBody,
  emailBodiesToShow,
  activeItem,
  formatDate
}) => { return emails.length > 0 ? (
  <EmailList>
    {emails.map(r => {
      const dateToShow = formatDate(r.date)
      return (
        <li key={r.id} onClick={() => showEmailBody(r.id)}>
          <img className='email__mail-img' src={iconMail} alt='mail from to' />
          <div className='email__item'>
            <span className={activeItem === 'from' ? 'active' : ''}>{r.from}</span>
            <span className='email__to'>
              <ToEmailListComponent activeItem={activeItem} emailAddresses={r.to} />
            </span>
            <span className={activeItem === 'subject' ? 'email__subject active' : 'email__subject'}>{r.subject}</span>
            <span className='email__date'>
              <span  className={activeItem === 'date' ? 'active' : ''}>
                {r.attachment !== '' ? <img className='email__attachment' src={attachmentImg} alt='attachment' /> : ''} {dateToShow}
              </span>
              <img className='email__date__arrow' src={iconArrow2} alt='arrow' />
            </span>
          </div>
          <div className={emailBodiesToShow.includes(r.id) ? 'email__details' : 'hide'}>
            <EmailBodyComponent
              from={r.from}
              to={r.to}
              date={r.date}
              subject={r.subject}
              attachment={r.attachment}
              emailBody={r.email_body}
            />
          </div>
        </li>
      )})
    }
  </EmailList> ) : <NoEmails><img src={logo} alt='logo' /></NoEmails>
}

export default EmailListComponent