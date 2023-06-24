export const network = 5;
export const lockAddress = "0x14dC06F762E7f4a756825c1A1dA569b318015Ad9";

export const paywallConfig = {
  locks: {
    [lockAddress]: {
      network,
    },
  },
  skipRecipients: true,
  title: "Unlock Premium Content",
  pessimistic: true,
};
