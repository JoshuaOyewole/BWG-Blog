import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-blue-700 hover:text-blue-200 dark:text-blue-300 dark:hover:text-blue-200">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
