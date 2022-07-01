import { FC, useState } from "react";
import { SOCIAL } from "./SignModal";
import styles from './SingUp.module.scss'
import { SocialButton } from "./SocialButton";

interface Props {
  tab: string
}

export const SingUp: FC<Props> = ({ tab }) => {
  return (
    <>
      <div className={styles.socialButtons}>
        {SOCIAL.map((element) => {
          return (
            <SocialButton tab={tab} label={element} />
          )
        })}
      </div>
      <div className={styles.divider}>
        <span className={styles.line}> ――― </span>
        <span> or with </span>
        <span className={styles.line}> ――― </span>
      </div>
      <div className={styles.form}>
        <input className={styles.input} type="email" name="email" placeholder="E-mail" pattern="/^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i"></input>
        <input className={styles.input} type="password" name="password" placeholder="Password"></input>
        <input className={styles.input} type="password" name="password" placeholder="Repeat password"></input>
      </div>
      <div className={styles.button} >SING UP</div>
      <div className={styles.agreement}> By registering, you agree to the terms of the <span className={styles.link}>License Agreement</span> and the <span className={styles.link}> Privacy Policy</span></div>
    </>
  )
}