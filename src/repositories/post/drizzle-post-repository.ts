import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }
  async findBySlugPublic(id: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<PostModel[]> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
}
