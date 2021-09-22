import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles["header-container"]}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
      </Link>

      <nav className={styles["header-btn"]}>
        <Link href="/">
          <a className={styles["nav-btn"]}>Home</a>
        </Link>
        <Link href="/about">
          <a
            className={`${styles["nav-btn"]} ${
              props.active ? styles.active : ""
            }`}
          >
            About us
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
