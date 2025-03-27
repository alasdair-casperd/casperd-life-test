import { Response } from "@/types/response";

export const useResponse = () => {
  /**
   * Store the current test response in session storage.
   * @param response
   */
  const storeResponse = (response: Response) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("testResponse", JSON.stringify(response));
    }
  };

  /**
   * Clear the response from session storage.
   * @param response
   */
  const clearResponse = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("testResponse");
    }
  };

  /**
   * Read the current test response from session storage.
   * @returns
   */
  const retrieveResponse = (): Response | undefined => {
    if (typeof window !== "undefined") {
      const response = sessionStorage.getItem("testResponse");
      return response ? JSON.parse(response) : undefined;
    }
  };

  return {
    storeResponse,
    clearResponse,
    retrieveResponse,
  };
};
