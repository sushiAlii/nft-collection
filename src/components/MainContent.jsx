import { Stack } from "@chakra-ui/react";

export const MainContent = () => {
  return (
    <div className="header-container">
      <Stack spacing={10}>
        <p className="header gradient-text">My NFT Collection</p>
        <p className="sub-text">
          Each unique. Each beautiful. Discover your NFT today.
        </p>
      </Stack>
    </div>
  );
};
