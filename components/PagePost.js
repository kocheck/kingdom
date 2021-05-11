import { HeadPage } from './HeadPage'

export default function PagePost({ children, meta}) {
  return (
    <>
      <HeadPage meta={meta} isHeadPage />
      <article>{children}</article>
    </>
  )
}
