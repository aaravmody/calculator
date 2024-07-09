// src/components/FileUpload.jsx
import React, { useState, useEffect } from 'react';
import api from '../api/api'; // Import the axios instance
import './FileUpload.css';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        const response = await api.get('http://localhost:3000/api/files');
        setUploadedFiles(response.data);
      } catch (error) {
        console.error('Error fetching uploaded files', error);
        if (error.response && error.response.status === 401) {
          console.log('Unauthorized: User is not authenticated');
        }
      }
    };

    fetchUploadedFiles();
  }, []);

  const handleFileUpload = async (event) => {
    const uploadedFiles = event.target.files;
    setFiles([...files, ...Array.from(uploadedFiles)]);

    // Create a FormData object to send the files to the backend
    const formData = new FormData();
    Array.from(uploadedFiles).forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await api.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadedFiles([...uploadedFiles, ...response.data]);
    } catch (error) {
      console.error('Error uploading files', error);
    }
  };

  return (
    <div className="file-upload-container">
      <div className="upload-section">
        <input
          type="file"
          id="fileInput"
          onChange={handleFileUpload}
          multiple
          style={{ display: 'none' }}
        />
        <button className="upload-button" onClick={() => document.getElementById('fileInput').click()}>
          Upload Files
        </button>
      </div>
      <div className="files-list">
        <h3>Uploaded Files</h3>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
              <a href={`http://localhost:3000/${file.path}`} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
