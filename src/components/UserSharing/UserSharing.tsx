import { useSharing } from "../../contexts/SharingContext";

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

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700">
      <span>{userName}</span>
      <select
        value={individualSharing[userName]}
        onChange={handleChange}
        className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
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
