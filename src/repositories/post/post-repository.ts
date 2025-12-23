import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(id: string): Promise<PostModel>;
}
