import styled from 'styled-components'

import { positionAbsoluteMixin, border1, gridLayout,
  overflowEllipsis, bgColor1, color2, boldTextColor, flexWrap } from '../../utils/CommonStyles'

export const EmailList = styled.ul`
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

export const NoEmails = styled.section`
  padding-top: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${border1};
`

export const ListHeader = styled.header`
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

export const EmailListHeading = styled.div`
  @media screen and (max-width: 1023px) {
    h2 { margin-left: 20px }
  }
`