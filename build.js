require("esbuild").build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: "lib",
  platform: "node",
  target: "node14",
});
