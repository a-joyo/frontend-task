// src/components/SharingOptions/SharingOptions.tsx

import { useSharing } from "../../contexts/SharingContext";
import styles from "./SharingOptions.module.css";
import { FaLock, FaUserFriends } from "react-icons/fa";

const SharingOptions: React.FC = () => {
  const { defaultSharing, setDefaultSharing } = useSharing();

  const options = [
    {
      label: "Metadata only",
      value: "Metadata only",
      description:
        "Only subject lines will be visible to anyone on your workspace",
      icon: <FaLock className="text-gray-500" />,
    },
    {
      label: "Subject line and metadata",
      value: "Subject line and metadata",
      description:
        "We'll share the subject, participants, and timestamp with anyone in your workspace",
      icon: <FaUserFriends className="text-gray-500" />,
    },
    {
      label: "Full access",
      value: "Full access",
      description:
        "Everything is shared with your workspace members (including the body, subject line, attachments)",
      icon: <FaUserFriends className="text-gray-500" />,
      badge: "Plus",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Default Sharing Configuration</h2>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`${styles.option} ${
              defaultSharing === option.value ? styles.selectedOption : ""
            }`}
          >
            <div className={styles.icon}>{option.icon}</div>
            <div className={styles.labelContainer}>
              <span className={styles.label}>
                {option.label}
                {option.badge && (
                  <span className={styles.badge}>{option.badge}</span>
                )}
              </span>
              <span className={styles.description}>{option.description}</span>
            </div>
            <input
              type="radio"
              value={option.value}
              checked={defaultSharing === option.value}
              onChange={() => setDefaultSharing(option.value)}
              className={styles.radioButton}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default SharingOptions;
