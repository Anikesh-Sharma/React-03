import React, { useEffect, useState } from 'react';

function UpdateTitleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title whenever the component renders
    document.title = `You clicked ${count} times`;

    // Clean-up function (if necessary) would go here
  }, [count]); // Dependency array with 'count', so the effect runs whenever 'count' changes

  return (
    <div>
      <h1>Update Document Title</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UpdateTitleComponent;
