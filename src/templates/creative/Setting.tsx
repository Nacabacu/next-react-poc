"use client"
import { FC, useEffect } from "react";
interface ITemplateSettingProps {};

const setCSSVariables = (variables: any) => {
  const root = document.documentElement;
  Object.keys(variables).forEach((key) => {
    root.style.setProperty(`--${key}`, variables[key]);
  });
};

export const TemplateSetting: FC<ITemplateSettingProps> = (props) => {
    useEffect(() => {
    const cssVariables = {
      'bs-primary': '#6f4e37',
      'bs-link-hover-color': '#6f4e37',
      'bs-primary-rgb': '111, 78, 55',
      'bs-link-color': '#6f4e37',
      'bs-hover-bg': '#5a3e2f',
      'bs-active-bg': '#4e3528',
    };

    setCSSVariables(cssVariables);
  }, []);
    return (
        <></>
    );
}

export default TemplateSetting;