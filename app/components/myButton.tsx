export default function MyButton({ count, onClick }: { count: number; onClick: () => void; }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Clicked {count} times
    </button>
  );
}
