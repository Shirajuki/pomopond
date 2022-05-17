import "preact/debug"; // <-- Add this line at the top of your main entry file
import { render } from "preact";
import { App } from "./app";

render(<App />, document.getElementById("app")!);
