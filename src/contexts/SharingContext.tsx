import { createContext, useContext, useState, ReactNode } from "react";

interface SharingContextProps {
  defaultSharing: string;
  setDefaultSharing: (value: string) => void;
  individualSharing: Record<string, string>;
  setIndividualSharing: (value: Record<string, string>) => void;
}

const SharingContext = createContext<SharingContextProps | undefined>(
  undefined
);

export const SharingProvider = ({ children }: { children: ReactNode }) => {
  const [defaultSharing, setDefaultSharing] = useState("Full access");
  const [individualSharing, setIndividualSharing] = useState<
    Record<string, string>
  >({
    "Jeremy Enderson": "Full access",
    "Nick Sharp": "Full access",
    "Alex Christie": "Metadata only",
  });

  return (
    <SharingContext.Provider
      value={{
        defaultSharing,
        setDefaultSharing,
        individualSharing,
        setIndividualSharing,
      }}
    >
      {children}
    </SharingContext.Provider>
  );
};

export const useSharing = () => {
  const context = useContext(SharingContext);
  if (!context)
    throw new Error("useSharing must be used within a SharingProvider");
  return context;
};
