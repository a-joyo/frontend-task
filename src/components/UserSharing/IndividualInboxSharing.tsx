// src/components/IndividualInboxSharing/IndividualInboxSharing.tsx

import UserCard from "./UserCard";
// import { useSharing } from "../../contexts/SharingContext";
import styles from "./IndividualInboxSharing.module.css";

const IndividualInboxSharing: React.FC = () => {
  // const { individualSharing } = useSharing();
  const users = ["Nick Sharp", "Alex Christie"];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Individual inbox sharing</h2>

      {/* Wrapper div for user container and share button */}
      <div className={styles.userAndButtonContainer}>
        {/* User container */}
        <div className={styles.selectedUserContainer}>
          <div className={styles.selectedUserInfo}>
            <span className={styles.avatar}>J</span>
            <span>Jeremy Enderson</span>
          </div>
          <select className={styles.dropdown}>
            <option>Full access</option>
            <option>Metadata only</option>
          </select>
        </div>

        {/* Share access button outside the user container but aligned next to it */}
        <button className={styles.shareButton}>Share access</button>
      </div>

      <div className={styles.userListHeader}>
        <span>User</span>
        <span>Access</span>
      </div>

      {users.map((user) => (
        <UserCard key={user} userName={user} />
      ))}
    </div>
  );
};

export default IndividualInboxSharing;
