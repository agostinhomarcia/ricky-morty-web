export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "alive":
      return "#27ae60";
    case "dead":
      return "#e74c3c";
    default:
      return "#95a5a6";
  }
};
