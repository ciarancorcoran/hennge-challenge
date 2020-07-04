import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

import { border1, gridLayout, bgColor1, color2, boldTextColor } from '../constants/CommonStyles'

import iconArrowAsc from '../assets/icon_arrow01.svg'

const EmailListHeading = styled.div`
  @media screen and (max-width: 1023px) {
    h2 { margin-left: 20px }
  }
`

const ListHeader = styled.header`
  background: ${bgColor1};
  padding: 20px;
  font-weight: bold;
  border: ${border1};
  border-width: 1px 0 1px 0;

  div {
    display: inline-block;
    color: ${color2};
    border-right: ${border1};
    padding: 0 10px;
    cursor: pointer;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: 0;
    }

    &.active {
      color: ${boldTextColor};
    }

    img {
      width: 10px;
      margin-left: 5px;

      &.ascending {
        transform: rotate(180deg);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    ${gridLayout}

    div {
      border-right: none;
      padding-left: 0;
    }
  }
`

interface IProps {
  resultsLength: number
  orderByAlphabetical: (selectedCol: string, ascending: boolean) => void
  activeItem: string
  updateActiveItems: (item: string) => void
}

const EmailListHeaderComponent: FunctionComponent<IProps> = ({
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