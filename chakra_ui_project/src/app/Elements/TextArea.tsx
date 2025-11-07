type TextAreaProps = {
  codeText: string;
  setCodeText: (newCode: string) => void;
};

const TextArea = ({ codeText, setCodeText }: TextAreaProps) => {
  return (
    <textarea
      className="
        w-full h-[82vh] p-4
        bg-gray-800 text-green-400
        "
      value={codeText}
      onChange={(e) => setCodeText(e.target.value)}
    />
  );
};

export default TextArea;
