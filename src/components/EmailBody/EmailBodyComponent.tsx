import React, { FunctionComponent } from 'react'
import moment from 'moment'

interface IProps {
  from: string
  to: string[]
  date: Date
  subject: string
  attachment: string | undefined
  emailBody: string
}

const EmailBodyComponent: FunctionComponent<IProps> = ({
  from,
  to,
  date,
  subject,
  attachment,
  emailBody }) => (
  <>
    <span><strong>From: </strong>{from}</span>
    <span><strong>To: </strong>{to.map(r => r)}</span>
    <span><strong>Date: </strong>{moment(date).format('YYYY/MM/DD h:mm:ss a')}</span>
    <span><strong>Subject: </strong>{subject}</span>
    {attachment !== '' ? <span><strong>Attachment: </strong>{attachment}</span> : ''}
    <p>{emailBody}</p>
  </>
)

export default EmailBodyComponent