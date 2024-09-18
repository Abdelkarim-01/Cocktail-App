import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import notFound from './../assets/not-found.svg'
import styles from'./../styles/Error.module.css'

const Error = () => {
  const error=useRouteError()

  if (error.status===404) {
    return (
        <div className={styles.main_div}>
          <img src={notFound} alt="Not Found" />
          <h3>Ohh !!</h3>
          <p>
            we can't seem to find page your looking for
          </p>
          <Link to={'/'}>GO Back Home</Link>
        </div>
    )
  }

  return (
    <div className={styles.main_div}>
      <h3>Something wont wrong !!</h3>
      <Link to={'/'}>GO Back Home</Link>
    </div>
  )
}

export default Error