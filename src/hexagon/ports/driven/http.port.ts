import { GetDTO, PostDTO } from "../../dtos";

export interface HttpPort {
  post(data: PostDTO): Promise<any>;
  get(data: GetDTO): Promise<any>;
}
