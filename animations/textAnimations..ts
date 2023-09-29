export const textAnim = {
  hidden: {
    opacity: 0.5,
    marginTop: "3vh",
  },
  show: {
    opacity: 1,
    marginTop: 0,
  },
};

export const secondaryTextAnim = {
  hidden: {
    opacity: 0.5,
    marginTop: "3vh",
  },
  show: {
    opacity: 1,
    marginTop: "20px",
  },
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
