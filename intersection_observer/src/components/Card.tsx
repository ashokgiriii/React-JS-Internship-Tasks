import { useEffect, useRef } from "react";
interface Props {
  src: string;
}

const Card = ({ src }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            //if not want to hide who is not intersected disable this
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        // rootMargin: "-100px",
        threshold: 1,
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      className="card bg-red-400 rounded-3xl overflow-hidden w-[calc(100%/3-10px)] h-[400px]"
      ref={ref}
    >
      <img className="w-[100%] h-[100%] object-cover" src={src} alt={src} />
    </div>
  );
};
export default Card;
