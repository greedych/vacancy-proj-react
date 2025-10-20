import styles from "./styles.module.css"


function VacancyBanner() {

  return(
    <div className={styles.containerBanner}>
      <h1>
        Один клик 
        и работа в кармане
      </h1>
      <form className={styles.vacancyForm}>
        <input type="text" placeholder="Должность или компания" className={styles.vacancyInput}/>
        <input type="text" placeholder="Город, Страна" className={styles.vacancyInput}/>
        <button className={styles.vacancyButton}>Поиск</button>
      </form>
    </div>
  )
}

export default VacancyBanner