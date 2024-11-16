// src/components/IndividualInboxSharing/UserCard.tsx

import { useSharing } from "../../contexts/SharingContext";
import styles from "./UserCard.module.css";

interface UserCardProps {
  userName: string;
}

const UserCard: React.FC<UserCardProps> = ({ userName }) => {
  const { individualSharing, setIndividualSharing } = useSharing();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndividualSharing({
      ...individualSharing,
      [userName]: event.target.value,
    });
  };

  const avatarColor =
    userName === "Nick Sharp" ? styles.avatarPurple : styles.avatarYellow;
  const email = `${userName.toLowerCase().replace(" ", "")}@attio.com`;

  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <span className={`${styles.avatar} ${avatarColor}`}>{userName[0]}</span>
        <div>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.userEmail}>{email}</p>
        </div>
      </div>
      <select
        value={individualSharing[userName]}
        onChange={handleChange}
        className={styles.dropdown}
      >
        <option value="Full access">Full access</option>
        <option value="Metadata only">Metadata only</option>
        <option value="Subject line and metadata">
          Subject line and metadata
        </option>
      </select>
    </div>
  );
};

export default UserCard;
