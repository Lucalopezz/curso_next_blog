import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

export class JsonPosRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    return await this.readFromDisk();
  }
  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((p) => p.id === id);
    if (!post) {
      throw new Error("Post não encontrado");
    }
    return post;
  }
}

