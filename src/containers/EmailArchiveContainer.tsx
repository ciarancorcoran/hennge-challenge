import React, { FunctionComponent, useState } from 'react'
import moment from 'moment'
import { RangeValue } from 'rc-picker/lib/interface'

import DateRangePickerComponent from '../components/DateRangePickerComponent'
import EmailListHeaderComponent from '../components/EmailListHeaderComponent'
import EmailListComponent from '../components/EmailListComponent'

import { IEmail } from '../constants/IEmail'
import { emails } from '../data/emails'

const EmailArchiveComponent: FunctionComponent = () => {
  const [dateRangeFrom, setDateRangeFrom] = useState<Date>()
  const [dateRangeTo, setDateRangeTo] = useState<Date>()
  const [emailsToDisplay, setEmailsToDisplay] = useState<readonly IEmail[]>([])
  const [emailBodiesToShow, setEmailBodiesToShow] = useState<number[]>([])
  const [activeItem, setActiveItem] = useState<string>('date')

  const updateActiveItems = (item: string) => setActiveItem(item)

  const dateChangeHandler = (date: RangeValue<moment.Moment>, dateString: [string, string]) => {
    setDateRangeFrom(new Date(dateString[0]))
    setDateRangeTo(new Date(dateString[1]))
  }

  const onSearch = () => {
    if (!dateRangeFrom || !dateRangeTo) {
      return
    }
    const filteredAndSortedByDate = emails.filter(r => r.date >= dateRangeFrom && r.date <= dateRangeTo)
      .concat()
      .sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)
    setEmailsToDisplay(filteredAndSortedByDate)
  }

  const orderByAlphabetical = (selectedCol: string, ascending: boolean) => {
    if (!dateRangeFrom || !dateRangeTo) {
      return
    }
    const sortedEmails = emailsToDisplay.concat().sort((a, b) => ascending ? a[selectedCol] < b[selectedCol] ? -1 : a[selectedCol] > b[selectedCol] ? 1 : 0
        : a[selectedCol] > b[selectedCol] ? -1 : a[selectedCol] < b[selectedCol] ? 1 : 0)
    setEmailsToDisplay(sortedEmails)
  }

  const showEmailBody = (idToAddOrRemove: number) => emailBodiesToShow.includes(idToAddOrRemove) ? removeEmailBodyToDisplay(idToAddOrRemove) : addEmailBodyToDisplay(idToAddOrRemove)

  const addEmailBodyToDisplay = (index: number) => {
    if (!emailBodiesToShow.includes(index)) {
      setEmailBodiesToShow([...emailBodiesToShow, index])
    }
  }

  const removeEmailBodyToDisplay = (index: number) => setEmailBodiesToShow(emailBodiesToShow.filter(item => item !== index))

  const formatDate = (date: Date) => {
    if (moment(Date.now()).format('YYYY/MM/DD') === moment(date).format('YYYY/MM/DD')) {
      return moment(date).format('h:mm')
    } else {
      return Number(moment(Date.now()).format('YYYY')) > Number(moment(date).format('YYYY')) ? moment(date).format('YYYY/DD/MM')
      : moment(date).format('MMM DD')
    }
  }

  return (
    <>
      <DateRangePickerComponent
        dateChangeHandler={dateChangeHandler}
        onSearch={onSearch}
      />
      <EmailListHeaderComponent
        resultsLength={emailsToDisplay.length}
        orderByAlphabetical={orderByAlphabetical}
        activeItem={activeItem}
        updateActiveItems={updateActiveItems}
      />
      <EmailListComponent
        emails={emailsToDisplay}
        showEmailBody={showEmailBody}
        emailBodiesToShow={emailBodiesToShow}
        activeItem={activeItem}
        formatDate={formatDate}
      />
    </>
  )
}

export default EmailArchiveComponent