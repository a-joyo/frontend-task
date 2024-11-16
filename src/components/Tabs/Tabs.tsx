// src/components/Tabs/Tabs.tsx

import { useState } from "react";
import { FaCog, FaUserLock } from "react-icons/fa";
import styles from "./Tabs.module.css";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className={styles.container}>
      {/* Tab Headers */}
      <div className={styles.tabHeaders}>
        {/* General Tab */}
        <button
          onClick={() => setActiveTab("General")}
          className={`${styles.tabButton} ${
            activeTab === "General" ? styles.activeTab : ""
          }`}
        >
          <FaCog className={styles.icon} />
          <span>General</span>
        </button>

        {/* Blocklist Tab */}
        <button
          onClick={() => setActiveTab("Blocklist")}
          className={`${styles.tabButton} ${
            activeTab === "Blocklist" ? styles.activeTab : ""
          }`}
        >
          <FaUserLock className={styles.icon} />
          <span>Blocklist</span>
          <span className={styles.badge}>12</span>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
