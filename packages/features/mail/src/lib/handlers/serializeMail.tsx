import { render } from '@react-email/render'

export default function serializeMail(Email: React.ComponentType<{ url: string }>, url: string) {
  return render(<Email url={url} />)
}
