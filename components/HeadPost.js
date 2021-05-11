export const HeadPost = ({ meta, isBlogPost }) => (
    <>
      <h3 className={isBlogPost? 'great-title' :null} >{meta.title}</h3>
      <div className='details'>
      {
          isBlogPost? null: <p>{meta.description}</p>
      }
        <span>{meta.date}</span>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
      </div>
    </>
  )
