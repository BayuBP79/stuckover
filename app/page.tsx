import Hello from "@/app/components/hello";

export default function Home() {
  console.log("im here");
  return (
    <>
      <h1 className="text-green-500">Welcome here</h1>
      <Hello />
    </>
  );
}
