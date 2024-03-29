import { FC } from 'react'
import style from './FollowButtons.module.scss'
import classNames from 'classnames'
import { FOLLOW_NETWORKS } from '../../utils/const'
import { useTranslation } from '../../utils/useTranslation'

type Networks = keyof typeof FOLLOW_NETWORKS
const KEY_NETWORKS = Object.keys(FOLLOW_NETWORKS) as Networks[]

interface Props {
  color?: 'white' | 'grey'
}

export const FollowButtons: FC<Props> = ({ color = 'white' }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(style.wrap, style[color])}>
      <div className={style.text}>{t('followUs')}</div>
      <div className={style.container}>
        {KEY_NETWORKS.map(label => (
          <a
            href={FOLLOW_NETWORKS[label]}
            key={label}
            className={classNames(style.followButton, style[label])}
          />
        ))}
      </div>
    </div>
  )
}
