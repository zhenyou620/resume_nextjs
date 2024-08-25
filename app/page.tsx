import { Personal } from './(home)/Personal';
import { Articles } from './(home)/Articles';
import { Skill } from './(home)/Skill';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-3xl px-6">
      <Personal />
      <Skill />
      <Articles />
    </main>
  );
}
