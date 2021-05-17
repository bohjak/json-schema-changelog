require('esbuild').build({
  entryPoints: ['lib/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'dist',
  platform: 'node',
  target: 'node14'
})