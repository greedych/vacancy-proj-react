import styles from "./styles.module.css"

function CategoryCard({icon, title}) {


  return(
    <div className={styles.categoryCard}>
      <img src={icon} className={styles.categoryIcon} />
      <p>{title}</p>
    </div>
  )
}

export default CategoryCard