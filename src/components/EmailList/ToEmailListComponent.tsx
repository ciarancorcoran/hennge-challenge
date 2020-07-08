import React, { FunctionComponent, useRef, useEffect, useState, useLayoutEffect } from 'react'

import { Badge } from './EmailListComponentStyles'

interface IProps {
  emailAddresses: readonly string[]
  activeItem: string
}

const ToEmailListComponent: FunctionComponent<IProps> = ({ emailAddresses, activeItem }) => {
  const itemsRef = useRef<HTMLSpanElement[] | null[]>([null])
  const [emailsTruncated, setEmailsTruncated] = useState<number>()

  useEffect(() => {
    const deRefItems = {...itemsRef}
    deRefItems.current = itemsRef.current.slice(0, emailAddresses.length)
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