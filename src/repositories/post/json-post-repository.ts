import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published === true);
  }
  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((p) => p.id === id);
    if (!post) {
      throw new Error("Post não encontrado para esse ID!");
    }
    return post;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      throw new Error("Post não encontrado para esse título!");
    }
    return post;
  }
  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
}
