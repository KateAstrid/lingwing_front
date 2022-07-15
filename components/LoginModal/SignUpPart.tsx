import { FC } from "react";
import styles from './SignUpPart.module.scss'

export const SignUpPart: FC = () => {
  return (
    <>
      <div className={styles.form}>
        <input 
          className={styles.input} 
          type="email" 
          placeholder="E-mail" 
          pattern="/^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i"
        />
        <input 
          className={styles.input} 
          type="password" 
          placeholder="Password"
        />
        <input 
          className={styles.input} 
          type="password"  
          placeholder="Repeat password"
        />
      </div>
      <div className={styles.button} >SING UP</div>
      <div className={styles.agreement}>
        By registering, you agree to the terms of the 
        <span className={styles.link}>License Agreement</span> and the <span className={styles.link}> Privacy Policy</span>
      </div>
    </>
  )
}