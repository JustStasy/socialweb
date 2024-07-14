import React from 'react'
import styles from './Loader.module.css'
import loadingImg from '../../../imges/userImages/loading.svg'

export const Loader = () => {
  return (
    <img src={loadingImg} className={styles.loadingImg} />
  )
}
