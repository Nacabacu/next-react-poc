import { Component } from "@/shared/component";
import '../shared/globals.css'

export const Template = () => {
  return (
    <>
      <div className="text-green-500" onClick={() => alert()}>Template</div>
      <Component></Component>
    </>
  );
}