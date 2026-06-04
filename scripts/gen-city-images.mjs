// Generates landmark hero images per city + a reusable German moving-scene library.
// Each image: higgsfield nano_banana_2 -> download PNG -> compress to webp -> delete PNG.
import { exec as execCb } from "node:child_process";
import { promisify } from "node:util";
import { writeFile, unlink } from "node:fs/promises";
import sharp from "sharp";

const exec = promisify(execCb);
const OUT = "public/images";

const SUFFIX =
  ", professional travel photography, golden hour natural daylight, photorealistic, high detail, sharp focus, no text, no watermark, no logos";

// slug -> recognizable landmark prompt (augsburg + muenchen already have images)
const LANDMARKS = {
  nuernberg: "Nuremberg old town, the medieval Imperial Castle (Kaiserburg) on the hill above half-timbered houses, view over the red rooftops",
  regensburg: "Regensburg historic Stone Bridge over the Danube river with the gothic St. Peter's Cathedral twin towers behind, medieval old town",
  ingolstadt: "Ingolstadt Bavaria, the white baroque New Castle and the historic red-brick Kreuztor city gate, old town",
  wuerzburg: "Wuerzburg, Marienberg Fortress on the vineyard hill above the Main river and the Old Main Bridge with baroque statues",
  frankfurt: "Frankfurt am Main modern skyline of glass skyscrapers reflected in the Main river at dusk, financial district, illuminated",
  wiesbaden: "Wiesbaden, the neoclassical Kurhaus spa building with columns and a fountain in front, elegant city square",
  stuttgart: "Stuttgart Schlossplatz square with the baroque New Palace facade, the jubilee column and fountains",
  mannheim: "Mannheim Art Nouveau Water Tower (Wasserturm) landmark with the surrounding baroque gardens and fountains",
  erfurt: "Erfurt, the medieval Merchants' Bridge (Kraemerbruecke) lined with half-timbered houses, Thuringia old town",
  jena: "Jena Thuringia, city center with the cylindrical JenTower skyscraper rising above the market square and old church",
  leipzig: "Leipzig market square with the renaissance Old Town Hall facade, historic city center, cobblestones",
  dresden: "Dresden baroque old town skyline along the Elbe river with the Frauenkirche dome, Bruehl's Terrace and the cathedral",
  fuerth: "Fuerth Bavaria, the historic town hall with its tall Italian-renaissance style clock tower, old town street",
  erlangen: "Erlangen, the baroque palace and Schlossgarten gardens with the Huguenot church, university town",
  aschaffenburg: "Aschaffenburg, the red sandstone renaissance Johannisburg Castle above the Main river, riverside view",
  rosenheim: "Rosenheim Bavaria, the colorful old town with the Mittertor gate tower and Inn-valley arcaded facades, Alps in the far distance",
  freising: "Freising Bavaria, the romanesque Cathedral of Saint Mary on the Cathedral Hill above the town rooftops",
  dachau: "Dachau Bavaria, the renaissance Dachau Palace with terraced court gardens overlooking the green countryside",
  fuerstenfeldbruck: "Fuerstenfeldbruck, the baroque Fuerstenfeld Monastery church with twin towers and the wide monastery square",
  gersthofen: "a tidy Bavarian small town residential street near Augsburg with neat single-family houses, a church steeple and green trees, sunny day",
  garching: "Garching near Munich, a modern Bavarian town with contemporary research-campus buildings and tidy tree-lined residential streets",
  germering: "Germering, a Bavarian suburban town near Munich with modern townhouses, tidy streets and a church tower",
  ottobrunn: "Ottobrunn, a leafy upscale Bavarian suburb of Munich with modern single-family homes and tree-lined avenues",
  unterhaching: "Unterhaching south of Munich, a Bavarian residential town with modern houses and the Alps on the horizon",
  koenigsbrunn: "Koenigsbrunn near Augsburg, a Bavarian town with modern residential housing along a wide main street and a church steeple",
  unterschleissheim: "Unterschleissheim north of Munich, a modern Bavarian town with contemporary apartment buildings and green parks",
  starnberg: "Starnberg on Lake Starnberg, a Bavarian lakeside town with sailboats on the water and the Alpine panorama behind, elegant villas",
};

// reusable, brand-neutral German moving scenes
const LIBRARY = {
  "moving/mov-01": "two professional movers in plain dark blue work uniforms carrying labeled cardboard moving boxes out of a German apartment building doorway, daylight, photorealistic, no logos, no text",
  "moving/mov-02": "a clean plain white moving truck parked on a quiet German residential street, two movers loading furniture wrapped in grey moving blankets, sunny day, photorealistic, no brand logos, no text",
  "moving/mov-03": "professional movers carefully wrapping a wooden wardrobe in grey protective moving blankets inside a bright empty apartment, photorealistic, no text",
  "moving/mov-04": "a happy young family with one child unpacking cardboard moving boxes in a bright modern empty German apartment with large windows and wooden floor, warm daylight, photorealistic, no text",
  "moving/mov-05": "two movers in dark blue uniforms assembling a wardrobe with a cordless drill in a bright new bedroom, furniture assembly service, photorealistic, no text",
  "moving/mov-06": "neatly stacked labeled cardboard moving boxes and a red hand-truck dolly in a clean modern living room with sunlight through the window, photorealistic, no text",
};

const tasks = [
  ...Object.entries(LANDMARKS).map(([slug, prompt]) => ({
    out: `cities/${slug}-hero`,
    prompt,
    aspect: "16:9",
  })),
  ...Object.entries(LIBRARY).map(([name, prompt]) => ({
    out: name,
    prompt,
    aspect: "3:2",
  })),
];

async function genOne(t, attempt = 1) {
  try {
    // build a properly double-quoted command (prompts contain commas/parens/apostrophes)
    const prompt = (t.prompt + SUFFIX).replace(/"/g, "'");
    const cmd =
      `higgsfield generate create nano_banana_2 --prompt "${prompt}" ` +
      `--aspect_ratio ${t.aspect} --resolution 2k --wait --json`;
    const { stdout } = await exec(cmd, { maxBuffer: 1024 * 1024 * 8 });
    const json = JSON.parse(stdout);
    const url = json[0]?.result_url;
    if (!url) throw new Error("no result_url");
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    const tmp = `${OUT}/${t.out}.png`;
    await writeFile(tmp, buf);
    const info = await sharp(tmp).resize(1600).webp({ quality: 80 }).toFile(`${OUT}/${t.out}.webp`);
    await unlink(tmp);
    console.log(`OK   ${t.out}.webp ${Math.round(info.size / 1024)}KB`);
    return true;
  } catch (e) {
    if (attempt < 3) {
      console.log(`RETRY ${t.out} (${attempt}) ${String(e).slice(0, 80)}`);
      return genOne(t, attempt + 1);
    }
    console.log(`FAIL ${t.out} ${String(e).slice(0, 120)}`);
    return false;
  }
}

// simple concurrency pool
const CONCURRENCY = 4;
let i = 0;
let ok = 0;
async function worker() {
  while (i < tasks.length) {
    const t = tasks[i++];
    if (await genOne(t)) ok++;
  }
}
console.log(`Generating ${tasks.length} images (concurrency ${CONCURRENCY})...`);
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log(`DONE ${ok}/${tasks.length} succeeded`);
