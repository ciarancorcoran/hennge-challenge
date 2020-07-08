import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { DatePicker } from 'antd'
import { RangeValue } from 'rc-picker/lib/interface'
import moment from 'moment'

import { bgColor1, color1 } from '../../utils/CommonStyles'

import iconSearch from '../../assets/icon_search.svg'
import iconCalender from '../../assets/icon_calender.svg'

const { RangePicker } = DatePicker

const DateSelection = styled.div`
  margin-bottom: 20px;

  @media screen and (max-width: 1023px) {
    margin-left: 20px;
  }

  img {
    width: 15px;
  }

  .date-selection-input,
  button {
    border: 1px solid #d3d3d3;
  }

  .date-selection-input {
    display: inline-block;
    border-radius: 4px 0 0 4px;
    padding-left: 10px;
    box-shadow: inset 0 0 2px ${color1};

    .ant-picker {
      padding: 4px 15px 4px 11px;

      .ant-picker-input { max-width: 75px; }
    }
  }

  button {
    background: ${bgColor1};
    padding: 5px 15px;
    border-radius: 0 4px 4px 0;
    border-left-width: 0;
  }
`

const RangePickerStyles = {
  display: 'flex',
  width: '280px'
}

interface IProps {
  dateChangeHandler: (date: RangeValue<moment.Moment>, dateString: [string, string]) => void
  onSearch: () => void
}

const DateRangePickerComponent: FunctionComponent<IProps> = ({ dateChangeHandler, onSearch }) => (
  <DateSelection>
    <div className='date-selection-input'>
      <img src={iconCalender} alt='Calendar' />
      <RangePicker
        separator={'-'}
        bordered={false}
        suffixIcon={undefined}
        dropdownClassName={'customize-panels'}
        popupStyle={RangePickerStyles}
        onChange={(date, dateString) => dateChangeHandler(date, dateString)}
      />
    </div>
    <button onClick={onSearch}>
      <img src={iconSearch} alt='Search' />
    </button>
  </DateSelection>
)

export default DateRangePickerComponent