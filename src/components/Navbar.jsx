import { Box, Flex, useColorModeValue, Stack } from "@chakra-ui/react";

export const Navbar = ({ currentAccount, setCurrentAccount }) => {
  var account = currentAccount;

  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("No Wallet detected! Go get Some!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("You are connected to the matrix.. Loading", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Something Happened! Error Connecting Wallet:", error);
    }
  };

  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
        <Box>Sushi NFT</Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {!account && renderNotConnectedContainer()}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
