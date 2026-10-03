import fs from "fs";
import path from "path";

/**
 * Intrinsic size of a JPEG or PNG under /public, read from the file header at
 * build time. Lets MDX `![alt](/images/...)` render through next/image with
 * correct width/height (no layout shift) without hand-written dimensions.
 */
export function getImageDims(src: string): { width: number; height: number } | null {
  if (!src.startsWith("/")) return null;
  const file = path.join(process.cwd(), "public", src);
  if (!fs.existsSync(file)) return null;
  const buf = fs.readFileSync(file);

  // PNG: IHDR chunk holds width/height at bytes 16–23
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk segments until a Start Of Frame marker
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) return null;
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      const isSof = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
      if (isSof) return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      i += 2 + len;
    }
  }
  return null;
}
