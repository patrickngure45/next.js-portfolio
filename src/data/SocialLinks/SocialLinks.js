import { data } from './socialData';

const SocialLinks = () => {
  return (
    <>
      {data.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        );
      })}
    </>
  );
};

export default SocialLinks;
