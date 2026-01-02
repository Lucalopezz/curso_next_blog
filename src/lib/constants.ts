export const IMAGE_UPLOAD_MAX_SIZE =
  Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600; // 900 * 1024 = 921600
export const IMAGE_UPLOAD_DIRECTORY =
  process.env.IMAGE_UPLOAD_DIRECTORY || "uploads";
export const IMAGE_SERVER_URL =
  process.env.IMAGE_SERVER_URL || "http://localhost:3000/uploads";
