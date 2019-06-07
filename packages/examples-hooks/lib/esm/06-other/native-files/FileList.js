import React from 'react';
function list(files) {
    const label = (file) => `'${file.name}' of size '${file.size}' and type '${file.type}'`;
    return files.map(file => React.createElement("li", { key: file.name }, label(file)));
}
const FileList = ({ files }) => {
    if (files.length === 0) {
        return React.createElement("div", null, "Nothing to display");
    }
    return React.createElement("div", null, list(files));
};
export default FileList;
