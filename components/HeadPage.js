export const HeadPage = ({ meta, isHeadPage }) => (
    <>
      <h3 className={isHeadPage? 'great-title' :null} >{meta.title}</h3>
      <div className='details'>
      {
          isHeadPage? null: <p>{meta.description}</p>
      }
        <span>{meta.date}</span>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
      </div>
    </>
  )
