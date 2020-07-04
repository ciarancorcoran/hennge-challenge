import { css } from 'styled-components'

// COLORS
export const bgColor1 = '#f6f6f6'
export const color1 = '#e2e2e2'
export const color2 = '#666666'
export const boldTextColor = '#111111';

// BORDERS
export const border1 = `1px solid ${color1}`

// MIXINS
export const positionAbsoluteMixin = ( top?: string, left?: string, right?: string) => css`
  position: absolute;
  top: ${top};
  left: ${left};
  right: ${right};
`
export const gridLayout = css`
  display: grid;
  grid-template-columns: 2fr 3fr 6fr 1fr;
`

export const overflowEllipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const flexWrap = css`
  display: flex;
  flex: wrap;
`