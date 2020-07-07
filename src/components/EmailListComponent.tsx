import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import ToEmailListComponent from './ToEmailListComponent'

import { IEmail } from '../constants/IEmail'
import { positionAbsoluteMixin, border1, gridLayout,
  overflowEllipsis, color2, boldTextColor, flexWrap } from '../constants/CommonStyles'

import iconArrow2 from '../assets/icon_arrow02.svg'
import iconMail from '../assets/icon_mail_sp.svg'
import attachmentImg from '../assets/icon_clip.svg'
import logo from '../assets/logo.png'

const EmailList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  li {
    border-bottom: ${border1};
    padding: 20px;
    & .email__item,
    & .email__to,
    & .email__item .email__date span { position: relative; }
    &:hover, &:active, &:focus {
      background: #f7f9fa;
      color: #0235dd;
      cursor: pointer;
    }
    .active {
      color: ${boldTextColor};
      font-weight: bold;
    }
    .email__mail-img {
      width: 12px;
      height: 45px;
      ${positionAbsoluteMixin()}
    }
    .email__item {
      ${flexWrap}

      & :nth-child(1) { order: 1; }
      & :nth-child(2) { order: 3; }
      & :nth-child(3) { order: 4; }
      & :nth-child(4) { order: 2; }
      & :nth-child(1) {
        margin-left: 20px;
      }
      & :nth-child(1) {
        flex-basis: 60%;
        margin-left: 15px;
      }
      & :nth-child(4) {
        flex-basis: 30%;
        margin-left: auto;
      }
      & :nth-child(2), & :nth-child(3) { flex-basis: 100%; }
      .email__date {
        text-align: right;
        & > *, span .email__attachment {
          margin: initial;
        }
        span .email__attachment {
          ${positionAbsoluteMixin('50%', '-18px')};
          margin-top: -7px;
          height: 14px;
          width: 14px;
        }
      }
      .email__date__arrow {
        width: 7px;
        height: 7px;
        margin-left: 10px;
      }
    }
    .email__details {
      &, p { margin-top: 20px }
      color: ${color2};
      margin-bottom: 0;
      padding-top: 20px;
      border-top: ${border1};
      span { display: block; }
    }
    .email__to {
      &, .email__to__list { overflow: hidden; }
      .email__to__list {
        ${overflowEllipsis}
        display: inline-block;
        width: 80%;
        margin-left: 0;
      }
      span { margin-right: 5px; }
    }
    @media screen and (min-width: 1024px) {
      .email__mail-img, .email__date__arrow { display: none; }
      .email__item {
        ${gridLayout}
        span:not(:last-child) {
          ${overflowEllipsis}
          padding-right: 5px;
        }
        & :nth-child(1) { order: 1; }
        & :nth-child(2) { order: 2; }
        & :nth-child(3) { order: 3; }
        & :nth-child(4) { order: 4; }
        & :nth-child(1), & :nth-child(2) { margin-left: 0 }
        .email__subject {
          width: 90%;
        }
        .email__date {
          margin-left: 0;
          text-align: left;
        }
      }
    }
  }
`
const NoEmails = styled.section`
  padding-top: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${border1};
`

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
            <span><strong>From: </strong>{r.from}</span>
            <span><strong>To: </strong>{r.to.map(r => r)}</span>
            <span><strong>Date: </strong>{moment(r.date).format('YYYY/MM/DD h:mm:ss a')}</span>
            <span><strong>Subject: </strong>{r.subject}</span>
            {r.attachment !== '' ? <span><strong>Attachment: </strong>{r.attachment}</span> : ''}
            <p>{r.email_body}</p>
          </div>
        </li>
      )})
    }
  </EmailList> ) : <NoEmails><img src={logo} alt='logo' /></NoEmails>
}

export default EmailListComponent