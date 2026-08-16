import path from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const images = path.join(root, 'src/assets/images/dsh');

const devices = await sharp(path.join(images, 'mobile-devices.png')).resize({ height: 438 }).png().toBuffer();
const running = await sharp(path.join(images, 'mobile-harness-running.png')).resize({ height: 540 }).png().toBuffer();
const login = await sharp(path.join(images, 'mobile-login.png')).resize({ height: 390 }).png().toBuffer();
const icon = await sharp(path.join(images, 'app-icon.png')).resize(92, 92).png().toBuffer();

const text = Buffer.from(`
  <svg width="1200" height="628" xmlns="http://www.w3.org/2000/svg">
    <style>
      .brand { font: 700 23px Arial, sans-serif; fill: #3a5bdc; }
      .title { font: 700 58px Arial, sans-serif; fill: #141b2d; }
      .body { font: 400 24px Arial, sans-serif; fill: #485269; }
      .notice { font: 600 17px Arial, sans-serif; fill: #485269; }
    </style>
    <text x="76" y="92" class="brand">DSH MOBILE REMOTE</text>
    <text x="76" y="210" class="title">DeepSeek Harness</text>
    <text x="76" y="278" class="title">on your phone</text>
    <text x="76" y="352" class="body">Pair once. Open your local Harness.</text>
    <text x="76" y="389" class="body">Submit normal tasks from Android.</text>
    <text x="76" y="522" class="notice">Open source community project</text>
  </svg>
`);

await sharp({
  create: {
    width: 1200,
    height: 628,
    channels: 4,
    background: '#f2f5fb',
  },
})
  .composite([
    { input: text, left: 0, top: 0 },
    { input: icon, left: 1004, top: 42 },
    { input: devices, left: 670, top: 150 },
    { input: running, left: 825, top: 72 },
    { input: login, left: 1010, top: 190 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(images, 'og-cover.png'));
