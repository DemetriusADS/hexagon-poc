import { RequestUsecase } from "../../hexagon/usecase/request.usecase";
import { makeAxiosAdapterFactory } from "./axiosadapter.factory";

const makeRequestUseCaseFactory = () =>
  new RequestUsecase(makeAxiosAdapterFactory());

export { makeRequestUseCaseFactory };
