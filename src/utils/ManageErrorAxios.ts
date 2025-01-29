import { AxiosError } from "axios";

export const manageErrorAxios = (error : AxiosError) => 
{
  // Error generado por Axios
  if (error.response) {
    console.error("Login error:", error.response.status, error.response.data);
    switch (error.response.status) {
      case 400:
        console.error("Solicitud incorrecta o datos no válidos");
        break;
      case 401:
        console.error("No autorizado");
        break;
      case 500:
        console.error("Error interno del servidor");
        break;
      default:
        console.error("Otro error HTTP");
    }
  } else if (error.request) {
    console.error("No response was received");
  } else {
    console.error("Error setting up the request");
  }
}