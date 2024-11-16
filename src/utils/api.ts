export const handleApiError = (error: any) => {
  if (error.response) {
    return `Erro ${error.response.status}: ${error.response.data.message}`;
  } else if (error.request) {
    return "Erro de conexão. Verifique sua internet.";
  } else {
    return "Ocorreu um erro inesperado.";
  }
};
