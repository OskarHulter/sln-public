export default {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    siteName: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
//   < meta charSet = 'utf-8' />
//     <meta
//               name='viewport'
// content = 'viewport-fit=cover, width=device-width, initial-scale=1'
//   />
//   <meta
//               property='title'
// content = {`Oskar Hulter - dev portfolio`}
// key = 'title'
//   />
//   <meta
//               property='og:title'
// content = {`Oskar Hulter - dev portfolio`}
// key = 'title'
//   />
/*

https://github.com/garmeeh/next-seo
JSON-LD
Next SEO now has the ability to set JSON-LD a form of structured data. Structured data is a standardised format for providing information about a page and classifying the page content.

Google has excellent content on JSON-LD -> HERE

Below you will find a very basic page implementing each of the available JSON-LD types:

Article
Breadcrumb
Blog
Recipe
Sitelinks Search Box
Course
Dataset
Corporate Contact
FAQ Page
How-to
Job Posting
Local Business
Product
Social Profile
News Article
Pull request very welcome to add any from the list found on here

? article

  <NextSeo
      openGraph={{
        title: 'Open Graph Article Title',
        description: 'Description of open graph article',
        url: 'https://www.example.com/articles/article-title',
        type: 'article',
        article: {
          publishedTime: '2017-06-21T23:04:13Z',
          modifiedTime: '2018-01-21T18:04:43Z',
          expirationTime: '2022-12-21T22:04:11Z',
          section: 'Section II',
          authors: [
            'https://www.example.com/authors/@firstnameA-lastnameA',
            'https://www.example.com/authors/@firstnameB-lastnameB',
          ],
          tags: ['Tag A', 'Tag B', 'Tag C'],
        },
        images: [
          {
            url: 'https://www.test.ie/images/cover.jpg',
            width: 850,
            height: 650,
            alt: 'Photo of text',
          },
        ],
      }}
    />
? profile
  <NextSeo
      openGraph={{
        title: 'Open Graph Profile Title',
        description: 'Description of open graph profile',
        url: 'https://www.example.com/@firstlast123',
        type: 'profile',
        profile: {
          firstName: 'First',
          lastName: 'Last',
          username: 'firstlast123',
          gender: 'female',
        },
        images: [
          {
            url: 'https://www.test.ie/images/profile.jpg',
            width: 850,
            height: 650,
            alt: 'Profile Photo',
          },
        ],
      }}
    />
*/
