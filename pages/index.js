import { useSelector } from 'react-redux';
import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import Popup from '../components/Calendar/CalendarForm/Popup';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const isPopupOpen = useSelector(state => state.isPopupOpen);
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Calendar" />
      </Head>
        {isPopupOpen && <Popup />}
        <Header />
        <Main />
    
    </div>
  )
}
