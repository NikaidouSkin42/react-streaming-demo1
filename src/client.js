import { hydrateRoot } from "react-dom/client";
import Page from "./Page.jsx";

const root = document.getElementById("root");

hydrateRoot(root, <Page />);
