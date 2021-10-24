import Link from 'next/link';
import links from './links.json';

const Links = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link href={link.url}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
};

export default Links;
