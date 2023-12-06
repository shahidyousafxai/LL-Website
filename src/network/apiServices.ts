import api from './http/axios';
import axios, { AxiosResponse, AxiosError } from 'axios';

class ApiService {
  // Process the response and return a typed result
  private processResponse<T>(
    status: boolean,
    endPoint: string,
    response: any
  ): { success: boolean; data: T } {
    if (status) {
      const data: T =
        response?.data?.results ?? response?.data?.data ?? response?.data;
      console.log(
        `%c ${endPoint}`,
        'color: green; font-family:sans-serif; font-size: 20px; font-weight: 700',
        data
      );
      return { success: status, data };
    } else {
      const statusCode = response?.response?.status;
      const errorMessage =
        response?.message === 'Network Error'
          ? response?.message
          : response?.response?.data;
      console.log(
        `%c ${endPoint}`,
        'color: red; font-family:sans-serif; font-size: 20px; font-weight: 700',
        {
          success: status,
          data: errorMessage,
        }
      );
      return { success: status, data: errorMessage };
    }
  }

  // Make a Post call to the API
  public sendPostWithoutAuth<T>(
    payload: any,
    endPoint: string,
    callBack: (result: { success: boolean; data: T }) => void
  ): void {
    axios
      .post<T>(endPoint, payload)
      .then((response: AxiosResponse<T>) => {
        callBack({ success: true, data: response.data });
        callBack(this.processResponse(true, endPoint, response));
      })
      .catch((response: AxiosError<T, any>) => {
        callBack(this.processResponse(false, endPoint, response));
      });
  }

  // Make a Get call to the API

  sendGetWithoutAuth<T>(
    payload: any,
    endPoint: string,
    callBack: (result: { success: boolean; data: T }) => void
  ) {
    axios
      .get<T>(endPoint, payload)
      .then((response: AxiosResponse<T>) => {
        callBack({ success: true, data: response.data });
        callBack(this.processResponse(true, endPoint, response));
      })
      .catch((response: AxiosError<T, any>) => {
        callBack(this.processResponse(false, endPoint, response));
      });
  }
}

const ApiServices = new ApiService();
export { ApiServices };
