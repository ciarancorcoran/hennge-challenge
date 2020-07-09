import React, { FunctionComponent, useState } from 'react'

import { EmailListHeading, ListHeader } from './EmailListComponentStyles'

import iconArrowAsc from '../../assets/icon_arrow01.svg'


type Props = {
  resultsLength: number
  orderByAlphabetical: (selectedCol: string, ascending: boolean) => void
  activeItem: string
  updateActiveItems: (item: string) => void
}

const EmailListHeaderComponent: FunctionComponent<Props> = ({
  resultsLength,
  orderByAlphabetical,
  activeItem,
  updateActiveItems
}) => {
  const [fromAscending, setFromAscending] = useState<boolean>(true)
  const [toAscending, setToAscending] = useState<boolean>(true)
  const [subjectAscending, setSubjectAscending] = useState<boolean>(true)
  const [dateAscending, setDateAscending] = useState<boolean>(true)

  return (
    <EmailListHeading>
      <h2>Results: {resultsLength}mail(s)</h2>
      { resultsLength > 0 ?
        <ListHeader>
          <div
            className={activeItem === 'from' ? 'active' : ''}
            onClick={() => {
              orderByAlphabetical('from', fromAscending)
              setFromAscending(!fromAscending)
              updateActiveItems('from')
            }}
          >
            From
            {activeItem === 'from' ? <img className={fromAscending ? 'ascending' : ''} src={iconArrowAsc} alt='From Descending or ascending' /> : ''}
          </div>
          <div
            className={activeItem === 'to' ? 'active' : ''}
            onClick={() => {
              orderByAlphabetical('to', toAscending)
              setToAscending(!toAscending)
              updateActiveItems('to')
            }}
          >
            To
            {activeItem === 'to' ? <img className={toAscending ? 'ascending' : ''} src={iconArrowAsc} alt='To Descending or ascending' /> : ''}
          </div>
          <div
            className={activeItem === 'subject' ? 'active' : ''}
            onClick={() => {
              orderByAlphabetical('subject', subjectAscending)
              setSubjectAscending(!subjectAscending)
              updateActiveItems('subject')
            }}
          >
            Subject
            {activeItem === 'subject' ? <img className={subjectAscending ? 'ascending' : ''} src={iconArrowAsc} alt='Subject Descending or ascending' /> : ''}
          </div>
          <div
            className={activeItem === 'date' ? 'active' : ''}
            onClick={() => {
              orderByAlphabetical('date', dateAscending)
              setDateAscending(!dateAscending)
              updateActiveItems('date')
            }}
          >
            Date
            {activeItem === 'date' ? <img className={dateAscending ? '' : 'ascending'} src={iconArrowAsc} alt='Date Descending or ascending' /> : ''}
          </div>
        </ListHeader> : ''
      }
    </EmailListHeading>
)}

export default EmailListHeaderComponent