import React, { useRef, useEffect } from 'react';

const Contact = ({ setContactRef }) => {
  const contactRef = useRef(null);

  // Pass the ref to the parent component (App) via a prop function
  useEffect(() => {
    setContactRef(contactRef);
  }, [setContactRef]);

  return (
    <div ref={contactRef} className="h-screen bg-teal-500">
      Contact Section
    </div>
  );
};

export default Contact;