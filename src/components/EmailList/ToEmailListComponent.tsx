import React, { FunctionComponent, useRef, useEffect, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

const Badge = styled.sup`
  background: #888888;
  padding: 1px 4px;
  color: #ffffff;
  border-radius: 4px;
  font-weight: bold;
  font-size: .8rem;
  position: absolute;
  height: 17px;
  width: 25px;
  top: 50%;
  right: 0;
  margin-top: -11px;
  line-height: 1.2;

  &::before {
    content: '+';
  }

  @media screen and (min-width: 1024px) {
    right: 30px;
  }
`

interface IProps {
  emailAddresses: readonly string[]
  activeItem: string
}

const ToEmailListComponent: FunctionComponent<IProps> = ({ emailAddresses, activeItem }) => {
  const itemsRef = useRef<HTMLSpanElement[] | null[]>([null])
  const [emailsTruncated, setEmailsTruncated] = useState<number>()

  useEffect(() => {
    const defRefItems = {...itemsRef}
    defRefItems.current = itemsRef.current.slice(0, emailAddresses.length)
    getTruncated()
  }, [emailAddresses])

  useLayoutEffect(() => {
    window.addEventListener('resize', getTruncated)
    return () => {
      window.removeEventListener('resize', getTruncated)
    }
  }, [])

  const getTruncated = () => {
    let truncatedCount = 0
    itemsRef.current.forEach((r: any) => {
      if (r.offsetLeft > (r.parentNode.offsetWidth - r.offsetWidth)) {
        setEmailsTruncated(truncatedCount++)
      }
    })
  }

  return (
    <>
      <div className='email__to__list'>{
        emailAddresses.map((res: string, i: number) =>
          <span
            className={activeItem === 'to' ? 'active' : ''}
            key={i}
            ref={(el) => itemsRef.current[i] = el}
          >
            {res}{i !== emailAddresses.length - 1 ? ',' : ''}
          </span>
        )}
      </div>
      {emailsTruncated && emailsTruncated > 0 ? <Badge>{emailsTruncated}</Badge> : ''}
    </>
  )
}

export default ToEmailListComponent