import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="">
      <header className="py-5  my-0 mx-auto max-w-3xl">
        <ul className="flex gap-4 items-center">
          <li>
            <span className="text-3xl">👩🏻‍💻</span>
          </li>
          <li>mayu</li>
          <li>/</li>
          <li>notes</li>
        </ul>
      </header>
    </div>
  );
};
