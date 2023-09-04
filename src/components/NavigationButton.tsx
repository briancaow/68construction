export default function NavigationButton(props: any) {
  return (
    <button
      className="text-lg p-3 text-red-700"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.children}
    </button>
  );
}
