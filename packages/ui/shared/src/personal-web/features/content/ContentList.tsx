//import Link from 'next/link'
// import useFilteredContent from './useFilteredContent.js'

function ContentList() {
  //const { filteredContent, filter, setFilter, status } = useFilteredContent()

  // if (status === 'loading') return <p>Loading...</p>
  // if (status === 'error') return <p>Error :(</p>

  return (
    <div style={{ border: '1px solid green', padding: '4px' }}>
      {/* <p>This component loads filtered films using custom RQ+Zustand hook</p>
      <p>The hook returns a filtered list of characters based on a filter held in Zustand state.</p>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value='SHOW_ALL'>ALL</option>
        <option value='MALE'>MALE</option>
        <option value='FEMALE'>FEMALE</option>
      </select>

      {filteredContent.map((contentKey: ContentKeys) => {
        const personUrlParts = contentKey.url.split('/').filter(Boolean)
        const contentId = personUrlParts[personUrlParts.length - 1]

        return (
          <article
            key={contentId}
            style={{ margin: '16px 0 0' }}
          >
            <Link to={`/content/${contentId}`}>
              <p>{contentKey.name}</p>
            </Link>
          </article>
        )
      })} */}
    </div>
  )
}

export default ContentList
