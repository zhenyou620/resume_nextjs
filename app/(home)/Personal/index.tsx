import { useState, type FC } from 'react';
import Image from 'next/image';

export const Personal: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="mx-auto mb-0 mt-16 flex flex-col content-center gap-5">
      <header>
        <div className="bg-red-500 max-w-3xl my-0 mx-auto transition-all duration-300 ease-in-out ">
          {/* <div className="face hidden h-14 w-14 rounded-xl sm:block"></div> */}
          <span className="text-2xl mr-2 hidden">👩🏻‍💻</span>
          <span className="-ml-[0.175rem] text-6xl font-bold tracking-tight w-full">
            Mayu Sakaguchi
          </span>
        </div>
      </header>
      <div className="text-base tracking-wide text-muted-foreground">
        <p>
          Mayu is a Software developer.&nbsp;&nbsp;I was born and raised in
          Nagoya in July 1999.
        </p>
        <p>I like to drink, and recently craft beer has become my favorite.</p>
      </div>
      <div className="flex flex-shrink-0 flex-col justify-end gap-4">
        <div className="flex gap-4">
          <a href="https://zenn.dev/zhenyou620" className="w-7">
            <Image
              src="/zenn.svg"
              alt="Zenn Link"
              className="w-8"
              width={100}
              height={100}
            ></Image>
          </a>
          <a href="https://note.com/zhenyou620" className="w-18">
            <Image
              src="/note.svg"
              alt="Note Link"
              className="w-8"
              width={100}
              height={100}
            ></Image>
          </a>
          <a href="https://github.com/zhenyou620" className="w-7">
            <Image
              src="/github.svg"
              alt="GitHub Link"
              className="w-7"
              width={100}
              height={100}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
};
