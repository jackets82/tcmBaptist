function BeliefsCard({ title, text }) {
  return (
    <div className="w-full text-center p-2 rounded-lg prose">
      <h1 className=" text-4xl font-semibold mb-5">{title}</h1>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default BeliefsCard;
