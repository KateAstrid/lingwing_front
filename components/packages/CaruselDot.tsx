import { FC } from 'react'
import style from './CaruselDot.module.scss'
import classNames from 'classnames'

interface Props {
  index: number
  current: number
  scrollHandler: VoidFunction
}

export const CaruselDot: FC<Props> = ({ index, current, scrollHandler }) => {
  return (
    <div
      className={classNames(style.dot, index === current && style.dot__hover)}
      onClick={scrollHandler}
    ></div>
  )
}
