import React, { useState, useMemo } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import TargetBox from './TargetBox';
import FileList from './FileList';
const { FILE } = NativeTypes;
const Container = () => {
    const [droppedFiles, setDroppedFiles] = useState([]);
    const accepts = useMemo(() => [FILE], []);
    const handleFileDrop = (item, monitor) => {
        if (monitor) {
            setDroppedFiles(monitor.getItem().files);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(TargetBox, { accepts: accepts, onDrop: handleFileDrop }),
        React.createElement(FileList, { files: droppedFiles })));
};
export default Container;
