// src/components/Breadcrumb/Breadcrumb.tsx

import styles from "./Breadcrumb.module.css";

const Breadcrumb: React.FC = () => {
  return (
    <div className={styles.breadcrumbContainer}>
      <span className={styles.breadcrumbItem}>Account</span>
      <span>/</span>
      <span className={styles.breadcrumbItem}>Emails & Calendar</span>
      <span>/</span>
      <span className={styles.breadcrumbCurrent}>julian@attio.com</span>
    </div>
  );
};

export default Breadcrumb;
