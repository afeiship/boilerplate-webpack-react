import CryptoJS from 'crypto-js';

async function file2wordArray(file: File): Promise<CryptoJS.lib.WordArray> {
  const arrayBuffer = await file.arrayBuffer();
  return CryptoJS.lib.WordArray.create(arrayBuffer);
}

export async function computeMD5(file: File) {
  const wordArray = await file2wordArray(file);
  return CryptoJS.MD5(wordArray).toString(CryptoJS.enc.Hex);
}

export async function computeSHA256(file: File) {
  const wordArray = await file2wordArray(file);
  return CryptoJS.SHA256(wordArray).toString(CryptoJS.enc.Hex);
}
