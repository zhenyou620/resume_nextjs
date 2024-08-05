import { Personal } from './Personal';
import { Articles } from './Articles';
import { Skill } from './Skill';
import { LinkCard } from './components/LinkCard';

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-3xl px-6">
      <Personal />
      {/* <LinkCard /> */}
      <Skill />
      <Articles />
    </main>
  );
}
