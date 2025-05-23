import React, { useEffect, useState } from 'react';
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchHits } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import Modal from 'react-modal';
import ImageModal from './components/ImageModal/ImageModal';
import { UnsplashImages } from './types/MainTypes';
import axios from 'axios';

Modal.setAppElement('#root');

function App() {

  const [hits, setHits] = useState<UnsplashImages[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setHits([]);
    setPage(1);
    setTotalPages(0);
    setError(null);
  }, [query]);

  useEffect(() => {

    if (!query) return;

    const abortController = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true)
        const data = await fetchHits(query, page, abortController.signal);
        setHits(prev => {
          const allImg = [...prev, ...(data.results || [])];
          const FilterImg = Array.from(new Map(allImg.map(item => [item.id, item])).values());
          return FilterImg;
        });
        setTotalPages(data.total_pages - 1);
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          if (error.code !== 'ERR_CANCELED') {
            setError('Try again later...')
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
     };
  }, [query, page]);

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery)
  };

  const openModal = (imageUrl:string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <SearchBar handleChangeQuery={handleChangeQuery} />
        {error ? (
        <ErrorMessage message={error} />
        ) : (
          <>
              <ImageGallery hits={hits} onImageClick={openModal}/>
        {isLoading && <Loader/>}
            {page < totalPages && !isLoading && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
          </>)}
        <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} imageUrl={selectedImage} />
      </div>
    </>
  )
}

export default App;
