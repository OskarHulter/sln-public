import { writeFile } from 'fs/promises'
import { globby } from 'globby'

const PAGE = 'https://sdorra.dev'

const createPath = (p) => {
  const path = '/' + p.replace('page.tsx', '')
  if (path.endsWith('/') && path.length > 1) {
    return path.substring(0, path.length - 1)
  }
  return path
}

const collectPaths = async () => {
  const paths = await globby('./**/page.tsx', {
    cwd: 'app',
  })
  return paths.map(createPath)
}

const createSitemap = async (routes) => {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
                <loc>${`${PAGE}${route}`}</loc>
            </url>
          `
        })
        .join('')}
  </urlset>
  `
}

;(async () => {
  const paths = await createPaths()
  const sitemap = await createSitemap(paths)
  await writeFile('./public/sitemap.xml', sitemap, { encoding: 'utf-8' })
})()
