import { Personal } from './Personal';
import { Articles } from './Article';
import { Skill } from './Skill';

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-3xl px-6">
      <Personal />
      <Skill />
    </main>
  );
}
