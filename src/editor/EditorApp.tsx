import { FC, useCallback, useState } from "react";
import { BusinessData } from "@/types/business";
import { EditorSideBar } from "./components/EditorSidebar";
import { CreativeTemplate } from "@/templates/creative/App";
import { Button } from '@material-tailwind/react';

interface IEditorAppProps {
  initalData: BusinessData;
}

export const EditorApp: FC<IEditorAppProps> = (props) => {
  const [renderData, setRenderData] = useState<BusinessData>(props.initalData);

  const onUpdated = useCallback((data: BusinessData) => {
    setRenderData(data);
  }, []);

  const onPublish = useCallback(() => {
    fetch('/api/templates?template=creative', {
      method: 'post',
      body: JSON.stringify(renderData),
    }).then(() => {
      
    });
  }, []);
  return (
    <>
      <div className="flex">
        <div className="w-1/4 top-0 bg-gray-100 p-4 sticky h-screen overflow-y-auto">
          <EditorSideBar initalData={props.initalData} onUpdated={onUpdated} />
          <Button onClick={onPublish} >Publish!</Button>
        </div>
        <div className="w-3/4 relative overflow-y-auto">
          <div className='absolute w-100'>
          <CreativeTemplate businessData={renderData} />
          </div>
        </div>
      </div>
    </>
  );
};
