export default function NavigationButton(props: any) {
  const possible = ["text-black", "text-gray-300"];
  return (
    <div
      className={`text-sm lg:text-lg p-3 ${
        props.isHeader ? "text-black" : "text-gray-300"
      }`}
    >
      {props.children}
    </div>
  );
}
