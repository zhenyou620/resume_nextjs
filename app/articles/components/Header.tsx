import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="">
      <header className="py-5  my-0 mx-auto max-w-3xl">
        <nav>
          <ul className="flex items-center font-medium ">
            <li>
              <span className="text-3xl ">👩🏻‍💻</span>
            </li>
            <li className="ml-3 ">mayu</li>
            <li className="text-base mx-2 font-normal">/</li>
            <li>notes</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
