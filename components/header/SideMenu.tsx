import classNames from "classnames";
import { FC } from "react";
import Foco from "react-foco";
import style from './MenuButton.module.scss'

const COURSES = ["English", "Spanish", "Georgian", "Russian", "Turkish", "Bengali"]
const ABOUT_COMPANY = ["Why with Us", "Certificate", "Partners", "Blog", "Jobs", "License Agreement", "Privacy Policy"]
const PREMIUM = ["Entrant", "Prices", "Buy a gift", "Coupon activation"]
const HELP = ["FAQ", "Contact us"]

interface SectionProps {
  options: string[]
  title: string
}

const Section: FC<SectionProps> = ({ options, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className={style.list}>
        {options.map(element => (
          <span key={element}>{element}</span>
        ))}
      </div>
    </section>
  )
}

interface SideMenuProps {
  onClose: () => void
}

export const SideMenu: FC<SideMenuProps> = ({ onClose }) => {
  return (
    <div className={style.wrapper} >
      <Foco component="div" className={style.menuContent} onClickOutside={onClose}>
        <div className={classNames(style.button, style.cross)} onClick={onClose}>✕</div>
        <div className={style.column}>
          <Section title="Courses" options={COURSES} />
          <Section title="Premium" options={PREMIUM} />
        </div>
        <div className={style.column}>
          <Section title="Company" options={ABOUT_COMPANY} />
          <Section title="Help" options={HELP} />
        </div>
        <div className={style.footer}>
          <h1>Download Lingwing app</h1>
          <div className={style.mobileMarkets}>
            <div className={classNames(style.market, style.apple)} />
            <div className={classNames(style.market, style.google)} />
          </div>
        </div>
      </Foco>
    </div >
  )
}