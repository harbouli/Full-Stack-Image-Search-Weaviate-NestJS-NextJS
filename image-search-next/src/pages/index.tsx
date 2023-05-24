import axios from 'axios';
import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import CopyRight from '@/components/sections/CopyRight';
import Navbar from '@/components/sections/Navbar';
import Seo from '@/components/Seo';

export type DevelopmentTool = {
  title: string;
  skills: string[];
  _keyL: string;
};
export default function HomePage() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [searchFile, setsearchFile] = React.useState<File | null>(null);
  const [result, setResult] = React.useState<[]>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };
  const handleSearchFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    setsearchFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      if (response.ok) {
        toast.success('File uploaded successfully');
        console.log('File uploaded successfully');
      } else {
        toast.error('Error uploading file');
        console.log('Error uploading file');
      }
    } catch (error) {
      toast.error(`Error::${error}`);
      console.log('Error:', error);
    }
  };
  const searchElement = async () => {
    if (!searchFile) return;

    const formData = new FormData();
    formData.append('file', searchFile);
    const response = await axios.post(
      'http://localhost:3000/image-search',
      formData
    );
    console.log(response);
    try {
      if (response.status < 300) {
        toast.success('Get Near Images');
        setResult(response.data);
        console.log('File uploaded successfully');
      } else {
        toast.error('Error uploading file');
        console.log('Error uploading file');
      }
    } catch (error) {
      toast.error(`Error:${error}`);
      console.log('Error:', error);
    }
  };
  return (
    <Layout>
      <Seo />

      <>
        <Navbar />
        <Container>
          {/* Upload To DB */}
          <>
            <div className='my-10'>
              <h1 className='my-10 text-center'>Upload To Your Databes</h1>
              <div className='flex w-full justify-center'>
                <input
                  onChange={handleFileChange}
                  type='file'
                  className='file-input-ghost file-input w-full max-w-xs'
                />

                <button
                  className='btn-outline btn-primary btn '
                  onClick={handleUpload}
                >
                  Upload To Database
                </button>
              </div>
            </div>
            {/* Search For Near Image */}
            <div className='my-10'>
              <h1 className='my-10 text-center'>Upload To Your Databes</h1>
              <div className='flex w-full justify-center'>
                <input
                  onChange={handleSearchFileChange}
                  type='file'
                  className='file-input-ghost file-input w-full max-w-xs'
                />

                <button
                  className='btn-outline btn-primary btn '
                  onClick={searchElement}
                >
                  Search For A Near Image
                </button>
              </div>
            </div>
            <div className='flex flex-wrap justify-between'>
              {result?.map((imageData: any, i) => {
                console.log(typeof imageData.image);
                return (
                  <div key={i} className='avatar'>
                    <div className='mask mask-squircle mx-10 my-10 w-80'>
                      <img
                        src={`data:image/jpg;base64,${imageData.image}`}
                        alt={`${i}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        </Container>
        <CopyRight />
      </>
      <Toaster />
    </Layout>
  );
}
