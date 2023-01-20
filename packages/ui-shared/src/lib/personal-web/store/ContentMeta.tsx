import useFilteredContent from '../hooks/useFilteredContent'

function ContentMeta() {
  const { filteredContent } = useFilteredContent()

  return (
    <div style={{ border: '1px solid blue', padding: '4px' }}>
      <p>This component loads filtered films using custom RQ+Zustand hook</p>
      <p>That filter resulted in {filteredContent.length} characters.</p>
    </div>
  )
}

export default ContentMeta
