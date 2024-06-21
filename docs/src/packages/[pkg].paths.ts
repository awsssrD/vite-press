export default {
  paths() {
    return [1, 2, 3].map((pkg) => {
      return { params: { pkg } };
    });
  },
};
