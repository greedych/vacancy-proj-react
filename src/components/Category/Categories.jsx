import CategoryCard from "./CategoryCard/CategoryCard"
import finance from "../../assets/icons/finance.svg"
import car from "../../assets/icons/car.svg"
import design from "../../assets/icons/design.svg"
import restoraunt from "../../assets/icons/restoraunt.svg"
import medicine from "../../assets/icons/medicine.svg"
import media from "../../assets/icons/media.svg"
import support from "../../assets/icons/support.svg"
import managment from "../../assets/icons/managment.svg"
import sales from "../../assets/icons/sales.svg"
import all from "../../assets/icons/all_categories.svg"
import styles from "./styles.module.css"




function Categories() {

  const categories = [
    {
      icon: finance,
      title: "Финансы"

    },
     {
      icon: car,
      title: "Финансы"

    },
     {
      icon: design,
      title: "Финансы"

    },
     {
      icon: restoraunt,
      title: "Финансы"

    },
     {
      icon: medicine,
      title: "Финансы"

    },
     {
      icon: media,
      title: "Финансы"

    },
     {
      icon: support,
      title: "Финансы"

    },
     {
      icon: managment,
      title: "Финансы"

    },
     {
      icon: sales,
      title: "Финансы"

    },
     {
      icon: all,
      title: "Финансы"

    },

  ]

  return(
    <div className={styles.categoriesJobContainer}>
      <h2>
        Работа 
        по категориям
      </h2>
      <section className={styles.categoriesBox}>
        {categories.map((category) => 
        <CategoryCard icon={category.icon} title={category.title}/>)}
      </section>
    </div>
  )
}

export default Categories