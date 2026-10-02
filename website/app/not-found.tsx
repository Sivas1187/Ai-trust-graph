import { SimplePage } from "./components/site/SimplePage";

export default function NotFound() {
  return (
    <SimplePage title="Page not found">
      <p>
        This address does not exist on the site. Go to the <a href="/">home page</a>, or to the{" "}
        <a href="/#artifacts">artifact library</a>.
      </p>
    </SimplePage>
  );
}
