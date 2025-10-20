import logo from "../../assets/images/Cooljob.svg"
import styles from "./styles.module.css"


function Header() {
  return(
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.mainLogo}/>
      <nav>
        <ul>
          <li>
            <a href="#">Поиск работы</a>
          </li>
          <li>
            <a href="#">Поиск стартапов</a>
          </li>
        </ul>
        <div className="signup">
          <a href="#">Регистрация</a>
          <button>Вход</button>
        </div>
      </nav>
    </header>
  )
}

export default Header