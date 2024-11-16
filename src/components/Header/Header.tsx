// src/components/Header/Header.tsx

import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Image from "next/image";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    {/* Breadcrumb */}
    <Breadcrumb />
    <div style={{ margin: "30px 0" }}></div>
    {/* Email and Sync Status Row */}
    <div className={styles.emailAndSyncContainer}>
      <div className={styles.emailContainer}>
        <Image
          src="/images/google-icon.png"
          alt="Google icon"
          width={24}
          height={24}
          className={styles.icon}
        />
        <h1 className={styles.email}>julian@attio.com</h1>
      </div>

      <span className={styles.syncStatus}>
        <span className={styles.syncIndicator}></span>
        <span>In Sync</span>
      </span>
    </div>

    {/* Update permissions text */}
    <p className={styles.updateText}>
      Update your inbox permissions and settings.{" "}
      <a href="#" className={styles.learnMoreLink}>
        Learn more
      </a>
    </p>
  </header>
);

export default Header;
