"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  return (
    <>
      {!next ? (
        <div>
          <div className="w-full mx-auto" onClick={() => setNext(true)}>
            <img
              src="/images/homepage.png"
              alt="megaeprsonals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <LoginForm adminId={adminId} posterId={posterId} />
      )}
    </>
  );
}
