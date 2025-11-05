interface Props {
  params: Promise<{ studentId: string }>;
}

const Page = async ({ params }: Props) => {
  const { studentId } = await params;

  return (
    <h1 className="absolute top-1/2 left-1/2  transform translate-x-[-50%] translate-y-[-50%] text-4xl">
      Hi, <span className="text-orange-400">{studentId}</span>
    </h1>
  );
};

export default Page;
