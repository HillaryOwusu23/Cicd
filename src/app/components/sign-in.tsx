export default function SignIn({
  provider,
  handler,
}: {
  provider: string;
  handler: () => void;
}) {
  return (
    <form action={handler}>
      <button type="submit" className="bg-black p-2 rounded">
        Signin with {provider}
      </button>
    </form>
  );
}
