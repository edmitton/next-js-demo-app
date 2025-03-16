import Gallery, { Profile } from './component/gallery';
import Image from 'next/image';

const person = {
  name: 'Gregorio Y.Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  }
};

export function App() {
  return (
    <>
      <Gallery />
      <Profile />
    </>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return(
    <div className="card-content">
      { children }
    </div>
  );
}

export default function TodoList() {
  return (
    <>
      <App />
      <div style={person.theme}>
        <h1>{person.name}&apos;s Todos</h1>
        <Image
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y.Zara"
          width={100}
          height={100}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>

      <div>
        <Card>
          <h1>Photo</h1>
          <Image
            className='avatar'
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="aklilu Lemma"
            width={70}
            height={70}
          />
        </Card>
        <Card>
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </Card>
      </div>
    </>
  );
}
