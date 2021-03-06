import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const MainContainer = styled.div`
  background-color: #fafdf3;
`;

function CreateRequestPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", selectedFile);
    fetch("http://localhost:3001/item-upload", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        console.log("File Upload successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <MainContainer>
      <div>Create Request Page</div>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <input type="file" onChange={changeHandler}></input>
        <button type="submit">Upload</button>
      </form>
    </MainContainer>
  );
}

export default CreateRequestPage;
