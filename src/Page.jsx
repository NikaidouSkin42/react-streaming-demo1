import React, { useState, Suspense } from "react";
import { useAsync } from "react-streaming";

export default function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>
          <Suspense fallback={<p>Loading...</p>}>
            <LazyComponent />
          </Suspense>
        </li>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      onClick={() => {
        console.log("count!");
        setCount((count) => count + 1);
      }}
    >
      Counter {count}
    </button>
  );
}

function LazyComponent() {
  // hydrate error here
  const val = useAsync(
    "hello-component-key",
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("Hello, I was lazy."), 1000);
      })
  );
  return <p>{val}</p>;
}
